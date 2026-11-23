// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "QwenB2BMed";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("qwenb2bmed", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 向千问医疗 Agent 提问并获取回答
   * 
   * @remarks
   * # 医疗 Agent 对话接入说明
   * 医疗 Agent 对话通过 UTF-8 JSON 接收文本和已开通的图片内容，提供一次完整 JSON 或 SSE 流式响应。
   * ## 1. 调用与鉴权
   * | 项目 | 写法 |
   * | --- | --- |
   * | 产品与版本 | `QwenB2BMed / 2026-11-21` |
   * | Action | `MedicalAgentChat` |
   * | 方法和路径 | `POST /v1/api/medicalQa` |
   * | 域名 | 使用服务方提供的目标环境 POP Endpoint |
   * | RAM Action | `qwenb2bmed:MedicalAgentChat` |
   * | 编码 | `Content-Type: application/octet-stream`，正文与签名使用同一份 UTF-8 字节 |
   * | 字段协议 | 小驼峰正文发送 `X-GW-Protocol: aliyun-roa` |
   * 阿里云 POP ACS3 使用阿里云 AK/SK 或 STS 凭据。业务 HMAC 使用服务方发放的业务 AK/SK。选择器和媒体能力须获得相应授权。
   * | 请求头 | 类型 | 必填 | 默认值 | 说明 |
   * | --- | --- | --- | --- | --- |
   * | `X-Request-Id` | string | 是 | — | 与正文 `communication.requestId` 一致。 |
   * | `X-GW-Protocol` | string | 使用本文格式时填写 | 兼容旧协议 | 固定 `aliyun-roa`。 |
   * | `X-GW-Access` | string | 是 | — | 业务 AK。 |
   * | `X-GW-Timestamp` | string | 是 | — | Unix 毫秒时间戳。 |
   * | `X-GW-Nonce` | string | 是 | — | 每次请求新生成的随机串。 |
   * | `X-GW-Signature` | string | 是 | — | 业务 HMAC-SHA256 的 64 位小写十六进制值。 |
   * | `Accept`（标准 HTTP 请求头） | string | 否 | — | 可填 application/json 或 text/event-stream。正文中仍须填写 params.responseStreaming。 |
   * | `X-DashScope-SSE` | string | 否 | 无 | 请求 SSE 时可填 enable，正文中仍须填写 params.responseStreaming。 |
   * 每个请求都必须在正文中传入 JSON 布尔值 `params.responseStreaming`。传 `false` 返回完整 JSON，传 `true` 返回 SSE。即使设置了 `Accept` 或 `X-DashScope-SSE`，也须填写此字段。
   * POP 签名器生成 `Authorization`、`x-acs-action`、`x-acs-version`、`x-acs-date`、`x-acs-signature-nonce` 和 `x-acs-content-sha256`。使用 STS 时按签名器要求传安全令牌。业务 SK 与 POP SK 各自在本地用于签名。
   * 业务签名的规范串依次为 METHOD、PATH、CANONICAL_QUERY、BODY_SHA256_HEX、TIMESTAMP、NONCE。各段用单个 LF 连接，末尾无额外 LF。无 query 时第三段留空。有 query 时使用实际请求的编码结果，按 `&` 拆分、去空项、对整项排序并重新用 `&` 连接。SHA-256 按实际发送的 UTF-8 正文字节计算。对规范串做 HMAC-SHA256，输出小写十六进制。使用本接口签名并发起请求的 Python 脚本见第 4 节末尾的「完整签名和调用示例」。
   * ## 2. 请求字段与会话
   * 将下表中的业务对象序列化为 UTF-8 JSON 字节，并用这份字节计算业务签名。使用 HTTP 客户端时，以 `Content-Type: application/octet-stream` 将同一份字节直接写入 POST 正文。使用阿里云通用 OpenAPI SDK 时，将这些字节的可读流设置到 `OpenApiRequest.stream`，填写第 1 节的业务请求头，并指定第 1 节的 Action、Version、ROA 路径和方法。
   * ```ts
   * interface MedicalRequest {
   *   // 会话关联和已授权的业务身份。
   *   communication: {
   *     requestId: string;
   *     sessionId: string;
   *     historyOwner: \\"CLIENT\\" | \\"GATEWAY\\";
   *     appId?: string;
   *     appScene?: string;
   *     userInfo?: { userId?: string; userIp?: string; userName?: string; deviceId?: string };
   *   };
   *   // 非空消息数组。最后一条是本轮 user。
   *   data: { messages: Array<{ role: \\"user\\" | \\"assistant\\"; content: string | ContentBlock[] }> };
   *   // 选择器和本次响应格式见下表。
   *   params: { directAgent?: \\"med_qa\\"; deepthink?: \\"true\\" | \\"false\\"; responseStreaming: boolean; outputAudio?: boolean; [name: string]: unknown };
   * }
   * ```
   * | 字段 | 类型 | 必填 | 默认值 | 说明 | 示例 |
   * | --- | --- | --- | --- | --- | --- |
   * | `communication` | object | 是 | — | 本轮请求、会话及客户身份。 | — |
   * | `communication.requestId` | string | 是 | — | 1–128 位字母、数字、点、下划线、冒号或连字符。与请求头 `X-Request-Id` 完全一致，`gw-ingress-` 前缀为保留值。 | `"med-req-001"` |
   * | `communication.sessionId` | string | 是 | — | 1–512 位字母、数字、点、下划线、冒号或连字符。续聊复用。 | `"med-session-001"` |
   * | `communication.historyOwner` | string | 是 | — | `GATEWAY` 或 `CLIENT`。区分大小写，同一会话保持一致。 | `"CLIENT"` |
   * | `communication.appId` | string | 条件填写 | 凭据的固定应用 | 填写已授权的值。显式值为非空字符串，最多 256 个 UTF-16 代码单元，首尾无空白且不含控制字符。 | `"your-app-id"` |
   * | `communication.appScene` | string | 否 | — | 客户场景标记。 | — |
   * | `communication.userInfo` | object | 否 | — | 客户提供的业务用户信息。 | — |
   * | `communication.userInfo.userId` | string | 否 | 按用户身份规则判断 | 按已开通的用户绑定填写。显式值为非空字符串，最多 256 个 UTF-16 代码单元，首尾无空白且不含控制字符。 | `"user-001"` |
   * | `communication.userInfo.userIp` | string | 否 | — | 客户声明的用户 IP。 | — |
   * | `communication.userInfo.userName` | string | 否 | — | 客户侧用户名。 | — |
   * | `communication.userInfo.deviceId` | string | 否 | — | 客户侧设备标识，最多 256 个 UTF-16 代码单元。可省略；媒体请求实际填写时须非空白且不含控制字符。 | — |
   * | `data` | object | 是 | — | 本轮对话数据。 | — |
   * | `data.messages` | array | 是 | — | 非空。`GATEWAY` 仅传本轮一条 user。`CLIENT` 按 user、assistant 成对提供历史，最后追加本轮 user。 | — |
   * | `data.messages[].role` | string | 是 | — | `user` 或 `assistant`。 | `"user"` |
   * | `data.messages[].content` | string 或 array | 是 | — | 文本或第 3 节所列内容块。 | `"体检报告中的血红蛋白这一项是什么意思？"` |
   * | `params` | object | 是 | 无 | 含必填字段 responseStreaming，其他 Agent 参数按需填写。 | — |
   * | `params.directAgent` | string | 否 | `med_qa` | 显式填写时只接受 `med_qa`。 | `"med_qa"` |
   * | `params.deepthink` | string | 否 | 不主动开启 | 显式使用字符串 `"true"` 开启，使用字符串 `"false"` 关闭。 | `"false"` |
   * | `params.outputAudio` | boolean | 否 | 不主动请求 | 可选 JSON 布尔值。业务已开通 HTTP 音频输出时，true 请求合成音频，false 或省略时不主动请求。按当前响应格式读取 audioFrames 或 SSE 音频帧。 | — |
   * | `params.responseStreaming` | boolean | 是 | 无 | 必须显式填写 JSON 布尔值。`false` 返回完整 JSON，`true` 返回 SSE。 | `false` |
   * 省略 directAgent 时使用 med_qa，显式传入时也只能填 med_qa。支持深思的授权场景传字符串 "true" 开启，传 "false" 或省略时不主动开启。 扩展字段以已开通服务公布的参数为准。 `GATEWAY` 每轮提供一条本轮 user。 `CLIENT` 可携带按 user/assistant 配对的历史，最后附本轮 user。历史 assistant 只传文本。续聊保持 sessionId、historyOwner 和同一业务身份，新一轮可使用新的 requestId。
   * 正文顶层使用 `communication`、`data` 和 `params`，`data` 中使用 `messages`。消息对象包含 `role` 与 `content`，扩展业务参数放在 `params` 中。
   * ## 3. 文本和图片
   * ```ts
   * type ContentBlock =
   *   | { type: \\"text\\"; text: string }
   *   | { type: \\"image_url\\"; imageUrl: string | { url: string } };
   * ```
   * | 字段 | 类型 | 填写条件 | 默认值 | 说明 |
   * | --- | --- | --- | --- | --- |
   * | `content[].type` | string | 使用内容块时 | — | 文字填 `text`，图片填 `image_url`。 |
   * | `content[].text` | string | 文本块 | — | 要发送的文字。 |
   * | `content[].imageUrl` | string 或 object | 图片块 | — | 可访问的 HTTPS 图片地址或 Base64 Data URL。 |
   * | `content[].imageUrl.url` | string | 图片引用为对象时 | — | 对象只包含这个字段。 |
   * 图片块填写 type=image_url；imageUrl 可直接传字符串，也可传仅含 url 的对象。imageUrl.url 支持服务可访问的 HTTPS 图片 URL 或完整 Base64 Data URL，例如 data:image/png;base64, 后接 PNG 文件的标准 Base64，JPEG 使用 data:image/jpeg;base64, 前缀。前缀所声明的 MIME 应与图片内容一致。 申请开通的媒体格式、图片数量和大小以实际服务约定为准。媒体块内保留 `image_url` 枚举，字段名使用 `imageUrl`。
   * 本医疗 API 当前公开的输入范围是文本和图片，内容块使用 `text` 或 `image_url`。这里的 HTTP 音频输出能力不代表支持音频输入；不要据此发送文件、音频或视频内容块。
   * 图片引用可填非空字符串或仅含 `url` 的对象；图片块不传额外的 fileName，文本块只用 type 和 text。`userInfo.deviceId` 可省略，媒体请求实际填写时须非空白且不含控制字符。图片来源、数量、尺寸和大小仍须满足客户已开通的服务范围。
   * ## 4. 完整请求正文示例
   * 示例使用已固定业务应用的凭据。需要显式应用身份时补充获准的 `communication.appId`，发送时将 `X-Request-Id` 设置为正文请求号。
   * ### 4.1 纯文本
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-agent-text-001",
   *     "sessionId": "med-agent-text-001-session",
   *     "historyOwner": "GATEWAY"
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": "请解释报告中参考区间的含义。"
   *       }
   *     ]
   *   },
   *   "params": {
   *     "responseStreaming": false
   *   }
   * }
   * ```
   * ### 4.2 HTTPS 图片
   * 将示例地址替换为服务可访问的真实图片地址。
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-agent-url-001",
   *     "sessionId": "med-agent-url-001-session",
   *     "historyOwner": "GATEWAY"
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": [
   *           {
   *             "type": "text",
   *             "text": "请描述图片中可见的内容。"
   *           },
   *           {
   *             "type": "image_url",
   *             "imageUrl": {
   *               "url": "https://example.com/medical-image.png"
   *             }
   *           }
   *         ]
   *       }
   *     ]
   *   },
   *   "params": {
   *     "responseStreaming": false
   *   }
   * }
   * ```
   * ### 4.3 Base64 图片
   * 下方使用一张合成 PNG 演示字段位置。实际请求使用自己的完整编码。
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-agent-base64-001",
   *     "sessionId": "med-agent-base64-001-session",
   *     "historyOwner": "GATEWAY"
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": [
   *           {
   *             "type": "text",
   *             "text": "请描述图片中可见的内容。"
   *           },
   *           {
   *             "type": "image_url",
   *             "imageUrl": {
   *               "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAb0lEQVR4nO3PAQkAAAyEwO9feoshgnABdLep8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3IPanc8OLDQitxAAAAAElFTkSuQmCC"
   *             }
   *           }
   *         ]
   *       }
   *     ]
   *   },
   *   "params": {
   *     "responseStreaming": false
   *   }
   * }
   * ```
   * 需要 SSE 时，在以上请求中使用 `"responseStreaming": true`，并可使用 `Accept: text/event-stream`。获取完整 JSON 时，显式传入 `false`。
   * #### 完整签名和调用示例
   * 示例从环境变量读取 POP_HOST、两套凭据和可选的 APP_ID、BUSINESS_USER_ID、SESSION_ID。POP_HOST 只填服务方提供的域名，不填协议和路径。脚本发送一条文本请求。设置 STREAM=true 可读取 SSE。
   * ```python
   * import datetime, hashlib, hmac, http.client, json, os, secrets, time
   * def sha(data):
   *     return hashlib.sha256(data).hexdigest()
   * def mac(secret, value):
   *     return hmac.new(secret.encode("utf-8"), value.encode("utf-8"), hashlib.sha256).hexdigest()
   * host = os.environ["POP_HOST"]
   * path = "/v1/api/medicalQa"
   * request_id = "chat-" + secrets.token_hex(12)
   * stream = os.environ.get("STREAM", "false").lower() == "true"
   * communication = {
   *     "requestId": request_id,
   *     "sessionId": os.environ.get("SESSION_ID", "session-" + secrets.token_hex(12)),
   *     "historyOwner": "GATEWAY",
   * }
   * if os.environ.get("APP_ID"):
   *     communication["appId"] = os.environ["APP_ID"]
   * if os.environ.get("BUSINESS_USER_ID"):
   *     communication["userInfo"] = {"userId": os.environ["BUSINESS_USER_ID"]}
   * body = {
   *     "communication": communication,
   *     "data": {"messages": [{"role": "user", "content": "请解释报告中参考区间的含义。"}]},
   *     "params": {"responseStreaming": stream},
   * }
   * payload = json.dumps(body, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
   * payload_hash = sha(payload)
   * timestamp, nonce = str(time.time_ns() // 1_000_000), secrets.token_hex(16)
   * gateway_string = "\\n".join(("POST", path, "", payload_hash, timestamp, nonce))
   * headers = {
   *     "host": host,
   *     "content-type": "application/octet-stream",
   *     "accept": "text/event-stream" if stream else "application/json",
   *     "x-acs-action": "MedicalAgentChat",
   *     "x-acs-version": "2026-11-21",
   *     "x-acs-date": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
   *     "x-acs-signature-nonce": secrets.token_hex(16),
   *     "x-acs-content-sha256": payload_hash,
   *     "x-gw-protocol": "aliyun-roa",
   *     "x-request-id": request_id,
   *     "x-gw-access": os.environ["GW_ACCESS_KEY_ID"],
   *     "x-gw-timestamp": timestamp,
   *     "x-gw-nonce": nonce,
   *     "x-gw-signature": mac(os.environ["GW_ACCESS_KEY_SECRET"], gateway_string),
   * }
   * if os.environ.get("POP_SECURITY_TOKEN"):
   *     headers["x-acs-security-token"] = os.environ["POP_SECURITY_TOKEN"]
   * signed_names = sorted(k for k in headers if k in ("host", "content-type") or k.startswith("x-acs-"))
   * canonical_headers = "".join(k + ":" + headers[k].strip() + "\\n" for k in signed_names)
   * signed_headers = ";".join(signed_names)
   * canonical_request = "\\n".join(("POST", path, "", canonical_headers, signed_headers, payload_hash))
   * pop_signature = mac(os.environ["POP_ACCESS_KEY_SECRET"], "ACS3-HMAC-SHA256\\n" + sha(canonical_request.encode("utf-8")))
   * headers["authorization"] = (
   *     "ACS3-HMAC-SHA256 Credential=" + os.environ["POP_ACCESS_KEY_ID"]
   *     + ",SignedHeaders=" + signed_headers + ",Signature=" + pop_signature
   * )
   * connection = http.client.HTTPSConnection(host, timeout=120)
   * try:
   *     connection.request("POST", path, body=payload, headers=headers)
   *     response = connection.getresponse()
   *     print("HTTP", response.status, "业务 RequestId:", request_id,
   *           "POP RequestId:", response.getheader("x-acs-request-id"))
   *     if "text/event-stream" in (response.getheader("content-type") or "").lower():
   *         # 打印保留 SSE 空行；业务集成应按空行组装事件并检查 complete/error。
   *         while True:
   *             line = response.readline()
   *             if not line:
   *                 break
   *             print(line.decode("utf-8"), end="")
   *     else:
   *         print(response.read().decode("utf-8"))
   * finally:
   *     connection.close()
   * ```
   * ## 5. 响应
   * ```ts
   * interface MedicalResponse {
   *   requestId?: string;
   *   communication?: { requestId?: string; sessionId?: string; responseId?: number };
   *   data?: {
   *     messages?: Array<{
   *       mimeType?: string;
   *       status?: string;
   *       content?: unknown;
   *       metaData?: {
   *         sourceSeq?: string; type?: string; barTitle?: string; content?: unknown;
   *         multiLoad?: Array<{ type?: string; sourceSeq?: string; content?: unknown }>;
   *       };
   *     }>;
   *     // 可选业务调试信息，可为 null；内容以实际返回为准。
   *     debug?: unknown;
   *     extraInfo?: { inputResources?: Array<{
   *       contentIndex?: number; type?: string; resourceId?: string; url?: string; fileName?: string;
   *     }> };
   *   };
   *   audioFrames?: Array<{
   *     type?: string; data?: string; last?: boolean; code?: string; message?: string; requestId?: string;
   *   }>;
   *   errorCode?: string | number;
   *   errorMsg?: string;
   *   error?: { code?: string | number; message?: string; requestId?: string };
   * }
   * ```
   * | 字段 | 类型 | 是否总有 | 默认值 | 说明 |
   * | --- | --- | --- | --- | --- |
   * | `requestId` | string | 否 | — | 业务关联号。POP 请求号见 x-acs-request-id。 |
   * | `communication` | object | 否 | — | 客户请求、会话与业务响应帧的关联信息。 |
   * | `communication.requestId/sessionId` | string | 否 | — | 与该业务请求及会话关联。 |
   * | `communication.responseId` | integer | 否 | — | 业务响应帧标识。完整 JSON 聚合时可为 0，SSE 按接收顺序处理，编号无需连续。 |
   * | `data.messages` | array | 否 | — | 正文、过程或卡片消息，依据 mimeType 解析。 |
   * | `data.messages[].mimeType` | string | 否 | — | 消息内容或过程类型。 |
   * | `data.messages[].status` | string | 否 | — | 该条消息状态。 |
   * | `data.messages[].content` | JSON | 否 | — | 当前消息正文或结构化内容。 |
   * | `data.messages[].metaData` | object | 否 | — | 可选的医疗检索进度或正文卡片信息，依据所在消息的 mimeType 解析。 |
   * | `metaData.sourceSeq/type/barTitle/content` | string 或 JSON | 否 | — | sourceSeq 关联同一进度模块；type 区分模块，barTitle 为可选标题，content 为该类型的可选业务内容。 |
   * | `metaData.multiLoad` | array | 否 | — | 正文卡片列表，各项可含 type、sourceSeq 和任意 JSON 的 content；可为空或省略，不保证每轮生成。 |
   * | `data.debug` | 任意 JSON（含 null） | 否 | — | 可选业务调试信息。是否返回、出现时机和内容按实际执行结果；不保证每轮或结束事件必有，也不用于判断业务完成。 |
   * | `data.extraInfo.inputResources` | array | 否 | — | 有结果时提供输入资源处理信息。各项可含 contentIndex、type、resourceId、url 和 fileName。 |
   * | `audioFrames` | array | 否 | — | 已开通对应输出时可能返回音频帧。各项可含 type、Base64 数据 data、末帧 last 或错误 code、message、requestId。 |
   * | `errorCode` | string 或 number | 否 | — | 0 表示业务成功。非 0 时读取 errorMsg 或 error，SSE 同时处理 error 事件。 |
   * | `errorMsg` | string | 否 | — | 服务返回的状态描述。 |
   * | `error` | object | 否 | — | 结构化业务错误，按 code 判断。 |
   * 医疗 Agent 的过程消息与正文分开处理：SSE 中可能返回 `mimeType=bar/progress` 的消息，`metaData.sourceSeq` 关联同一模块的更新。资料检索模块的 `metaData.type` 可为 `bar_ref_source_inline`，其 `metaData.content` 可含 `query_list`（检索词数组）、`docs`（当前资料对象数组）和 `status`。这两个数组键按实际报文保留拼写。`docs` 中的字段随资料来源变化，可能为空，不要求每个对象都具备同一组字段。过程消息只按实际收到的内容展示，不保证每轮都有。
   * 正文可能包含 `[(sourceSeq)]` 卡片占位，与 `metaData.multiLoad` 中同一 `sourceSeq` 的卡片关联；卡片的 `type` 和 `content` 按实际返回解析，不能把普通资料列表自行当成正文卡片。遇到未支持的卡片类型，可跳过卡片并继续读取正文。一次完整 JSON 仍按 `data.messages` 读取应答，不能要求它复现 SSE 中的全部中间过程。
   * 一次完整 JSON 的成功示例
   * `debug: null` 仅演示此可选字段的空值形状，不表示每次都会返回。客户端不应据此推定固定的调试子字段。
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-agent-text-001",
   *     "responseId": 0
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "mimeType": "multi_load/iframe",
   *         "status": "complete",
   *         "content": "请结合报告上的参考区间理解各项指标。",
   *         "metaData": {
   *           "multiLoad": []
   *         }
   *       }
   *     ],
   *     "debug": null
   *   },
   *   "errorCode": 0,
   *   "errorMsg": "success"
   * }
   * ```
   * SSE 示例
   * ```text
   * data:{"communication":{"requestId":"med-agent-text-001","responseId":0},"data":{"messages":[{"mimeType":"multi_load/iframe","status":"processing","content":"请结合报告上的参考区间。","metaData":{"multiLoad":[]}}]},"errorCode":0,"errorMsg":"success"}
   * event:complete
   * data:{"communication":{"requestId":"med-agent-text-001","responseId":1},"data":{"messages":[{"mimeType":"multi_load/iframe","status":"complete","content":"请结合报告上的参考区间理解各项指标。","metaData":{"multiLoad":[]}}]},"errorCode":0,"errorMsg":"success"}
   * ```
   * SSE 按空行分隔事件。complete 可能携带最终正文，也可能携带空对象，先处理其中已有的业务数据再结束。正文累计快照按更新替换，卡片按 sourceSeq 等业务标识处理。流内收到 error、断开且缺少正常终帧、或收到业务错误时按失败处理。HTTP 请求号与业务请求号分别记录，便于联调排查。
   * ## 6. 错误与重试
   * 先检查 HTTP 状态。HTTP 200 时继续检查业务 errorCode 或结构化 error，SSE 还要读取流内事件至 complete 或 error。流开始后的错误可在 HTTP 200 的连接中通过 event:error 返回。
   * | 状况 | 处理 |
   * | --- | --- |
   * | `INVALID_REQUEST`、`IMAGE_PROCESSING_ERROR`，HTTP 400 | 核对字段类型、会话、图片编码和媒体授权，修正请求。 |
   * | POP 鉴权错误，或 `AUTH_INVALID_KEY`、`AUTH_INVALID_SIGNATURE`、`AUTH_TIMESTAMP_EXPIRED`、`AUTH_NONCE_REPLAY`，业务网关 HTTP 401 | 按对应认证层核对凭据、正文哈希、时间戳与 nonce。签名已过期或 nonce 已使用时，为新尝试重新签名。 |
   * | `DIRECT_AGENT_FORBIDDEN`、`AUTH_APP_FORBIDDEN`、`AUTH_URI_FORBIDDEN`，HTTP 403 | 核对应用身份、接口权限及已开通的模型或 Agent。 |
   * | `SESSION_ACCESS_DENIED`，HTTP 403 | 核对会话与当前业务身份的归属，保持续聊身份一致，不使用其他用户的会话。 |
   * | `ADMISSION_SERVICE_SUSPENDED`、`PLATFORM_ACCESS_DISABLED`、`AUTH_DISABLED`，HTTP 403 | 当前服务、接口或凭据不可用，联系服务方确认恢复或授权，勿持续重试。 |
   * | `PAYLOAD_TOO_LARGE`，HTTP 413 | 缩小正文或图片，按服务约定的大小、像素和资源限制重新提交。 |
   * | `SESSION_BUSY`、`SESSION_CONFLICT`，HTTP 409 | 等待在途请求结束，核对同一会话的身份和历史托管方后再调用。 |
   * | 限流、配额或下游短时不可用，HTTP 429 | 区分可恢复的限流与需要处理授权或配额的情况。适用重试时采用退避，有可用 Retry-After 时采用其秒数。 |
   * | `DOWNSTREAM_TIMEOUT`，HTTP 504，或流内错误、超时、断线 | 记录业务请求号和 POP 请求号。重试前核对原请求的执行情况，新尝试使用新的时间戳、nonce 和签名。 |
   * 失败 JSON 示例
   * ```json
   * {
   *   "error": {
   *     "code": "INVALID_REQUEST",
   *     "message": "请检查请求参数。",
   *     "requestId": "med-agent-text-001"
   *   }
   * }
   * ```
   * 流开始后的错误示例
   * ```text
   * event:error
   * data:{"communication":{"requestId":"med-agent-text-001"},"errorCode":"DOWNSTREAM_TIMEOUT","errorMsg":"downstream timeout"}
   * ```
   * 新请求生成新的时间戳、nonce 和签名。请求号用于关联，重复使用同一个值可能再次执行请求。
   * 
   * @param request - MedicalAgentChatRequest
   * @param headers - MedicalAgentChatHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MedicalAgentChatResponse
   */
  async *medicalAgentChatWithSSE(request: $_model.MedicalAgentChatRequest, headers: $_model.MedicalAgentChatHeaders, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.MedicalAgentChatResponse, any, unknown> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xDashScopeSSE)) {
      realHeaders["X-DashScope-SSE"] = String(headers.xDashScopeSSE);
    }

    if (!$dara.isNull(headers.xGWAccess)) {
      realHeaders["X-GW-Access"] = String(headers.xGWAccess);
    }

    if (!$dara.isNull(headers.xGWNonce)) {
      realHeaders["X-GW-Nonce"] = String(headers.xGWNonce);
    }

    if (!$dara.isNull(headers.xGWProtocol)) {
      realHeaders["X-GW-Protocol"] = String(headers.xGWProtocol);
    }

    if (!$dara.isNull(headers.xGWSignature)) {
      realHeaders["X-GW-Signature"] = String(headers.xGWSignature);
    }

    if (!$dara.isNull(headers.xGWTimestamp)) {
      realHeaders["X-GW-Timestamp"] = String(headers.xGWTimestamp);
    }

    if (!$dara.isNull(headers.xRequestId)) {
      realHeaders["X-Request-Id"] = String(headers.xRequestId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "MedicalAgentChat",
      version: "2026-11-21",
      protocol: "HTTPS",
      pathname: `/v1/api/medicalQa`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.MedicalAgentChatResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.MedicalAgentChatResponse({}));
      }

    }
  }

  /**
   * 向千问医疗 Agent 提问并获取回答
   * 
   * @remarks
   * # 医疗 Agent 对话接入说明
   * 医疗 Agent 对话通过 UTF-8 JSON 接收文本和已开通的图片内容，提供一次完整 JSON 或 SSE 流式响应。
   * ## 1. 调用与鉴权
   * | 项目 | 写法 |
   * | --- | --- |
   * | 产品与版本 | `QwenB2BMed / 2026-11-21` |
   * | Action | `MedicalAgentChat` |
   * | 方法和路径 | `POST /v1/api/medicalQa` |
   * | 域名 | 使用服务方提供的目标环境 POP Endpoint |
   * | RAM Action | `qwenb2bmed:MedicalAgentChat` |
   * | 编码 | `Content-Type: application/octet-stream`，正文与签名使用同一份 UTF-8 字节 |
   * | 字段协议 | 小驼峰正文发送 `X-GW-Protocol: aliyun-roa` |
   * 阿里云 POP ACS3 使用阿里云 AK/SK 或 STS 凭据。业务 HMAC 使用服务方发放的业务 AK/SK。选择器和媒体能力须获得相应授权。
   * | 请求头 | 类型 | 必填 | 默认值 | 说明 |
   * | --- | --- | --- | --- | --- |
   * | `X-Request-Id` | string | 是 | — | 与正文 `communication.requestId` 一致。 |
   * | `X-GW-Protocol` | string | 使用本文格式时填写 | 兼容旧协议 | 固定 `aliyun-roa`。 |
   * | `X-GW-Access` | string | 是 | — | 业务 AK。 |
   * | `X-GW-Timestamp` | string | 是 | — | Unix 毫秒时间戳。 |
   * | `X-GW-Nonce` | string | 是 | — | 每次请求新生成的随机串。 |
   * | `X-GW-Signature` | string | 是 | — | 业务 HMAC-SHA256 的 64 位小写十六进制值。 |
   * | `Accept`（标准 HTTP 请求头） | string | 否 | — | 可填 application/json 或 text/event-stream。正文中仍须填写 params.responseStreaming。 |
   * | `X-DashScope-SSE` | string | 否 | 无 | 请求 SSE 时可填 enable，正文中仍须填写 params.responseStreaming。 |
   * 每个请求都必须在正文中传入 JSON 布尔值 `params.responseStreaming`。传 `false` 返回完整 JSON，传 `true` 返回 SSE。即使设置了 `Accept` 或 `X-DashScope-SSE`，也须填写此字段。
   * POP 签名器生成 `Authorization`、`x-acs-action`、`x-acs-version`、`x-acs-date`、`x-acs-signature-nonce` 和 `x-acs-content-sha256`。使用 STS 时按签名器要求传安全令牌。业务 SK 与 POP SK 各自在本地用于签名。
   * 业务签名的规范串依次为 METHOD、PATH、CANONICAL_QUERY、BODY_SHA256_HEX、TIMESTAMP、NONCE。各段用单个 LF 连接，末尾无额外 LF。无 query 时第三段留空。有 query 时使用实际请求的编码结果，按 `&` 拆分、去空项、对整项排序并重新用 `&` 连接。SHA-256 按实际发送的 UTF-8 正文字节计算。对规范串做 HMAC-SHA256，输出小写十六进制。使用本接口签名并发起请求的 Python 脚本见第 4 节末尾的「完整签名和调用示例」。
   * ## 2. 请求字段与会话
   * 将下表中的业务对象序列化为 UTF-8 JSON 字节，并用这份字节计算业务签名。使用 HTTP 客户端时，以 `Content-Type: application/octet-stream` 将同一份字节直接写入 POST 正文。使用阿里云通用 OpenAPI SDK 时，将这些字节的可读流设置到 `OpenApiRequest.stream`，填写第 1 节的业务请求头，并指定第 1 节的 Action、Version、ROA 路径和方法。
   * ```ts
   * interface MedicalRequest {
   *   // 会话关联和已授权的业务身份。
   *   communication: {
   *     requestId: string;
   *     sessionId: string;
   *     historyOwner: \\"CLIENT\\" | \\"GATEWAY\\";
   *     appId?: string;
   *     appScene?: string;
   *     userInfo?: { userId?: string; userIp?: string; userName?: string; deviceId?: string };
   *   };
   *   // 非空消息数组。最后一条是本轮 user。
   *   data: { messages: Array<{ role: \\"user\\" | \\"assistant\\"; content: string | ContentBlock[] }> };
   *   // 选择器和本次响应格式见下表。
   *   params: { directAgent?: \\"med_qa\\"; deepthink?: \\"true\\" | \\"false\\"; responseStreaming: boolean; outputAudio?: boolean; [name: string]: unknown };
   * }
   * ```
   * | 字段 | 类型 | 必填 | 默认值 | 说明 | 示例 |
   * | --- | --- | --- | --- | --- | --- |
   * | `communication` | object | 是 | — | 本轮请求、会话及客户身份。 | — |
   * | `communication.requestId` | string | 是 | — | 1–128 位字母、数字、点、下划线、冒号或连字符。与请求头 `X-Request-Id` 完全一致，`gw-ingress-` 前缀为保留值。 | `"med-req-001"` |
   * | `communication.sessionId` | string | 是 | — | 1–512 位字母、数字、点、下划线、冒号或连字符。续聊复用。 | `"med-session-001"` |
   * | `communication.historyOwner` | string | 是 | — | `GATEWAY` 或 `CLIENT`。区分大小写，同一会话保持一致。 | `"CLIENT"` |
   * | `communication.appId` | string | 条件填写 | 凭据的固定应用 | 填写已授权的值。显式值为非空字符串，最多 256 个 UTF-16 代码单元，首尾无空白且不含控制字符。 | `"your-app-id"` |
   * | `communication.appScene` | string | 否 | — | 客户场景标记。 | — |
   * | `communication.userInfo` | object | 否 | — | 客户提供的业务用户信息。 | — |
   * | `communication.userInfo.userId` | string | 否 | 按用户身份规则判断 | 按已开通的用户绑定填写。显式值为非空字符串，最多 256 个 UTF-16 代码单元，首尾无空白且不含控制字符。 | `"user-001"` |
   * | `communication.userInfo.userIp` | string | 否 | — | 客户声明的用户 IP。 | — |
   * | `communication.userInfo.userName` | string | 否 | — | 客户侧用户名。 | — |
   * | `communication.userInfo.deviceId` | string | 否 | — | 客户侧设备标识，最多 256 个 UTF-16 代码单元。可省略；媒体请求实际填写时须非空白且不含控制字符。 | — |
   * | `data` | object | 是 | — | 本轮对话数据。 | — |
   * | `data.messages` | array | 是 | — | 非空。`GATEWAY` 仅传本轮一条 user。`CLIENT` 按 user、assistant 成对提供历史，最后追加本轮 user。 | — |
   * | `data.messages[].role` | string | 是 | — | `user` 或 `assistant`。 | `"user"` |
   * | `data.messages[].content` | string 或 array | 是 | — | 文本或第 3 节所列内容块。 | `"体检报告中的血红蛋白这一项是什么意思？"` |
   * | `params` | object | 是 | 无 | 含必填字段 responseStreaming，其他 Agent 参数按需填写。 | — |
   * | `params.directAgent` | string | 否 | `med_qa` | 显式填写时只接受 `med_qa`。 | `"med_qa"` |
   * | `params.deepthink` | string | 否 | 不主动开启 | 显式使用字符串 `"true"` 开启，使用字符串 `"false"` 关闭。 | `"false"` |
   * | `params.outputAudio` | boolean | 否 | 不主动请求 | 可选 JSON 布尔值。业务已开通 HTTP 音频输出时，true 请求合成音频，false 或省略时不主动请求。按当前响应格式读取 audioFrames 或 SSE 音频帧。 | — |
   * | `params.responseStreaming` | boolean | 是 | 无 | 必须显式填写 JSON 布尔值。`false` 返回完整 JSON，`true` 返回 SSE。 | `false` |
   * 省略 directAgent 时使用 med_qa，显式传入时也只能填 med_qa。支持深思的授权场景传字符串 "true" 开启，传 "false" 或省略时不主动开启。 扩展字段以已开通服务公布的参数为准。 `GATEWAY` 每轮提供一条本轮 user。 `CLIENT` 可携带按 user/assistant 配对的历史，最后附本轮 user。历史 assistant 只传文本。续聊保持 sessionId、historyOwner 和同一业务身份，新一轮可使用新的 requestId。
   * 正文顶层使用 `communication`、`data` 和 `params`，`data` 中使用 `messages`。消息对象包含 `role` 与 `content`，扩展业务参数放在 `params` 中。
   * ## 3. 文本和图片
   * ```ts
   * type ContentBlock =
   *   | { type: \\"text\\"; text: string }
   *   | { type: \\"image_url\\"; imageUrl: string | { url: string } };
   * ```
   * | 字段 | 类型 | 填写条件 | 默认值 | 说明 |
   * | --- | --- | --- | --- | --- |
   * | `content[].type` | string | 使用内容块时 | — | 文字填 `text`，图片填 `image_url`。 |
   * | `content[].text` | string | 文本块 | — | 要发送的文字。 |
   * | `content[].imageUrl` | string 或 object | 图片块 | — | 可访问的 HTTPS 图片地址或 Base64 Data URL。 |
   * | `content[].imageUrl.url` | string | 图片引用为对象时 | — | 对象只包含这个字段。 |
   * 图片块填写 type=image_url；imageUrl 可直接传字符串，也可传仅含 url 的对象。imageUrl.url 支持服务可访问的 HTTPS 图片 URL 或完整 Base64 Data URL，例如 data:image/png;base64, 后接 PNG 文件的标准 Base64，JPEG 使用 data:image/jpeg;base64, 前缀。前缀所声明的 MIME 应与图片内容一致。 申请开通的媒体格式、图片数量和大小以实际服务约定为准。媒体块内保留 `image_url` 枚举，字段名使用 `imageUrl`。
   * 本医疗 API 当前公开的输入范围是文本和图片，内容块使用 `text` 或 `image_url`。这里的 HTTP 音频输出能力不代表支持音频输入；不要据此发送文件、音频或视频内容块。
   * 图片引用可填非空字符串或仅含 `url` 的对象；图片块不传额外的 fileName，文本块只用 type 和 text。`userInfo.deviceId` 可省略，媒体请求实际填写时须非空白且不含控制字符。图片来源、数量、尺寸和大小仍须满足客户已开通的服务范围。
   * ## 4. 完整请求正文示例
   * 示例使用已固定业务应用的凭据。需要显式应用身份时补充获准的 `communication.appId`，发送时将 `X-Request-Id` 设置为正文请求号。
   * ### 4.1 纯文本
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-agent-text-001",
   *     "sessionId": "med-agent-text-001-session",
   *     "historyOwner": "GATEWAY"
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": "请解释报告中参考区间的含义。"
   *       }
   *     ]
   *   },
   *   "params": {
   *     "responseStreaming": false
   *   }
   * }
   * ```
   * ### 4.2 HTTPS 图片
   * 将示例地址替换为服务可访问的真实图片地址。
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-agent-url-001",
   *     "sessionId": "med-agent-url-001-session",
   *     "historyOwner": "GATEWAY"
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": [
   *           {
   *             "type": "text",
   *             "text": "请描述图片中可见的内容。"
   *           },
   *           {
   *             "type": "image_url",
   *             "imageUrl": {
   *               "url": "https://example.com/medical-image.png"
   *             }
   *           }
   *         ]
   *       }
   *     ]
   *   },
   *   "params": {
   *     "responseStreaming": false
   *   }
   * }
   * ```
   * ### 4.3 Base64 图片
   * 下方使用一张合成 PNG 演示字段位置。实际请求使用自己的完整编码。
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-agent-base64-001",
   *     "sessionId": "med-agent-base64-001-session",
   *     "historyOwner": "GATEWAY"
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": [
   *           {
   *             "type": "text",
   *             "text": "请描述图片中可见的内容。"
   *           },
   *           {
   *             "type": "image_url",
   *             "imageUrl": {
   *               "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAb0lEQVR4nO3PAQkAAAyEwO9feoshgnABdLep8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3IPanc8OLDQitxAAAAAElFTkSuQmCC"
   *             }
   *           }
   *         ]
   *       }
   *     ]
   *   },
   *   "params": {
   *     "responseStreaming": false
   *   }
   * }
   * ```
   * 需要 SSE 时，在以上请求中使用 `"responseStreaming": true`，并可使用 `Accept: text/event-stream`。获取完整 JSON 时，显式传入 `false`。
   * #### 完整签名和调用示例
   * 示例从环境变量读取 POP_HOST、两套凭据和可选的 APP_ID、BUSINESS_USER_ID、SESSION_ID。POP_HOST 只填服务方提供的域名，不填协议和路径。脚本发送一条文本请求。设置 STREAM=true 可读取 SSE。
   * ```python
   * import datetime, hashlib, hmac, http.client, json, os, secrets, time
   * def sha(data):
   *     return hashlib.sha256(data).hexdigest()
   * def mac(secret, value):
   *     return hmac.new(secret.encode("utf-8"), value.encode("utf-8"), hashlib.sha256).hexdigest()
   * host = os.environ["POP_HOST"]
   * path = "/v1/api/medicalQa"
   * request_id = "chat-" + secrets.token_hex(12)
   * stream = os.environ.get("STREAM", "false").lower() == "true"
   * communication = {
   *     "requestId": request_id,
   *     "sessionId": os.environ.get("SESSION_ID", "session-" + secrets.token_hex(12)),
   *     "historyOwner": "GATEWAY",
   * }
   * if os.environ.get("APP_ID"):
   *     communication["appId"] = os.environ["APP_ID"]
   * if os.environ.get("BUSINESS_USER_ID"):
   *     communication["userInfo"] = {"userId": os.environ["BUSINESS_USER_ID"]}
   * body = {
   *     "communication": communication,
   *     "data": {"messages": [{"role": "user", "content": "请解释报告中参考区间的含义。"}]},
   *     "params": {"responseStreaming": stream},
   * }
   * payload = json.dumps(body, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
   * payload_hash = sha(payload)
   * timestamp, nonce = str(time.time_ns() // 1_000_000), secrets.token_hex(16)
   * gateway_string = "\\n".join(("POST", path, "", payload_hash, timestamp, nonce))
   * headers = {
   *     "host": host,
   *     "content-type": "application/octet-stream",
   *     "accept": "text/event-stream" if stream else "application/json",
   *     "x-acs-action": "MedicalAgentChat",
   *     "x-acs-version": "2026-11-21",
   *     "x-acs-date": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
   *     "x-acs-signature-nonce": secrets.token_hex(16),
   *     "x-acs-content-sha256": payload_hash,
   *     "x-gw-protocol": "aliyun-roa",
   *     "x-request-id": request_id,
   *     "x-gw-access": os.environ["GW_ACCESS_KEY_ID"],
   *     "x-gw-timestamp": timestamp,
   *     "x-gw-nonce": nonce,
   *     "x-gw-signature": mac(os.environ["GW_ACCESS_KEY_SECRET"], gateway_string),
   * }
   * if os.environ.get("POP_SECURITY_TOKEN"):
   *     headers["x-acs-security-token"] = os.environ["POP_SECURITY_TOKEN"]
   * signed_names = sorted(k for k in headers if k in ("host", "content-type") or k.startswith("x-acs-"))
   * canonical_headers = "".join(k + ":" + headers[k].strip() + "\\n" for k in signed_names)
   * signed_headers = ";".join(signed_names)
   * canonical_request = "\\n".join(("POST", path, "", canonical_headers, signed_headers, payload_hash))
   * pop_signature = mac(os.environ["POP_ACCESS_KEY_SECRET"], "ACS3-HMAC-SHA256\\n" + sha(canonical_request.encode("utf-8")))
   * headers["authorization"] = (
   *     "ACS3-HMAC-SHA256 Credential=" + os.environ["POP_ACCESS_KEY_ID"]
   *     + ",SignedHeaders=" + signed_headers + ",Signature=" + pop_signature
   * )
   * connection = http.client.HTTPSConnection(host, timeout=120)
   * try:
   *     connection.request("POST", path, body=payload, headers=headers)
   *     response = connection.getresponse()
   *     print("HTTP", response.status, "业务 RequestId:", request_id,
   *           "POP RequestId:", response.getheader("x-acs-request-id"))
   *     if "text/event-stream" in (response.getheader("content-type") or "").lower():
   *         # 打印保留 SSE 空行；业务集成应按空行组装事件并检查 complete/error。
   *         while True:
   *             line = response.readline()
   *             if not line:
   *                 break
   *             print(line.decode("utf-8"), end="")
   *     else:
   *         print(response.read().decode("utf-8"))
   * finally:
   *     connection.close()
   * ```
   * ## 5. 响应
   * ```ts
   * interface MedicalResponse {
   *   requestId?: string;
   *   communication?: { requestId?: string; sessionId?: string; responseId?: number };
   *   data?: {
   *     messages?: Array<{
   *       mimeType?: string;
   *       status?: string;
   *       content?: unknown;
   *       metaData?: {
   *         sourceSeq?: string; type?: string; barTitle?: string; content?: unknown;
   *         multiLoad?: Array<{ type?: string; sourceSeq?: string; content?: unknown }>;
   *       };
   *     }>;
   *     // 可选业务调试信息，可为 null；内容以实际返回为准。
   *     debug?: unknown;
   *     extraInfo?: { inputResources?: Array<{
   *       contentIndex?: number; type?: string; resourceId?: string; url?: string; fileName?: string;
   *     }> };
   *   };
   *   audioFrames?: Array<{
   *     type?: string; data?: string; last?: boolean; code?: string; message?: string; requestId?: string;
   *   }>;
   *   errorCode?: string | number;
   *   errorMsg?: string;
   *   error?: { code?: string | number; message?: string; requestId?: string };
   * }
   * ```
   * | 字段 | 类型 | 是否总有 | 默认值 | 说明 |
   * | --- | --- | --- | --- | --- |
   * | `requestId` | string | 否 | — | 业务关联号。POP 请求号见 x-acs-request-id。 |
   * | `communication` | object | 否 | — | 客户请求、会话与业务响应帧的关联信息。 |
   * | `communication.requestId/sessionId` | string | 否 | — | 与该业务请求及会话关联。 |
   * | `communication.responseId` | integer | 否 | — | 业务响应帧标识。完整 JSON 聚合时可为 0，SSE 按接收顺序处理，编号无需连续。 |
   * | `data.messages` | array | 否 | — | 正文、过程或卡片消息，依据 mimeType 解析。 |
   * | `data.messages[].mimeType` | string | 否 | — | 消息内容或过程类型。 |
   * | `data.messages[].status` | string | 否 | — | 该条消息状态。 |
   * | `data.messages[].content` | JSON | 否 | — | 当前消息正文或结构化内容。 |
   * | `data.messages[].metaData` | object | 否 | — | 可选的医疗检索进度或正文卡片信息，依据所在消息的 mimeType 解析。 |
   * | `metaData.sourceSeq/type/barTitle/content` | string 或 JSON | 否 | — | sourceSeq 关联同一进度模块；type 区分模块，barTitle 为可选标题，content 为该类型的可选业务内容。 |
   * | `metaData.multiLoad` | array | 否 | — | 正文卡片列表，各项可含 type、sourceSeq 和任意 JSON 的 content；可为空或省略，不保证每轮生成。 |
   * | `data.debug` | 任意 JSON（含 null） | 否 | — | 可选业务调试信息。是否返回、出现时机和内容按实际执行结果；不保证每轮或结束事件必有，也不用于判断业务完成。 |
   * | `data.extraInfo.inputResources` | array | 否 | — | 有结果时提供输入资源处理信息。各项可含 contentIndex、type、resourceId、url 和 fileName。 |
   * | `audioFrames` | array | 否 | — | 已开通对应输出时可能返回音频帧。各项可含 type、Base64 数据 data、末帧 last 或错误 code、message、requestId。 |
   * | `errorCode` | string 或 number | 否 | — | 0 表示业务成功。非 0 时读取 errorMsg 或 error，SSE 同时处理 error 事件。 |
   * | `errorMsg` | string | 否 | — | 服务返回的状态描述。 |
   * | `error` | object | 否 | — | 结构化业务错误，按 code 判断。 |
   * 医疗 Agent 的过程消息与正文分开处理：SSE 中可能返回 `mimeType=bar/progress` 的消息，`metaData.sourceSeq` 关联同一模块的更新。资料检索模块的 `metaData.type` 可为 `bar_ref_source_inline`，其 `metaData.content` 可含 `query_list`（检索词数组）、`docs`（当前资料对象数组）和 `status`。这两个数组键按实际报文保留拼写。`docs` 中的字段随资料来源变化，可能为空，不要求每个对象都具备同一组字段。过程消息只按实际收到的内容展示，不保证每轮都有。
   * 正文可能包含 `[(sourceSeq)]` 卡片占位，与 `metaData.multiLoad` 中同一 `sourceSeq` 的卡片关联；卡片的 `type` 和 `content` 按实际返回解析，不能把普通资料列表自行当成正文卡片。遇到未支持的卡片类型，可跳过卡片并继续读取正文。一次完整 JSON 仍按 `data.messages` 读取应答，不能要求它复现 SSE 中的全部中间过程。
   * 一次完整 JSON 的成功示例
   * `debug: null` 仅演示此可选字段的空值形状，不表示每次都会返回。客户端不应据此推定固定的调试子字段。
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-agent-text-001",
   *     "responseId": 0
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "mimeType": "multi_load/iframe",
   *         "status": "complete",
   *         "content": "请结合报告上的参考区间理解各项指标。",
   *         "metaData": {
   *           "multiLoad": []
   *         }
   *       }
   *     ],
   *     "debug": null
   *   },
   *   "errorCode": 0,
   *   "errorMsg": "success"
   * }
   * ```
   * SSE 示例
   * ```text
   * data:{"communication":{"requestId":"med-agent-text-001","responseId":0},"data":{"messages":[{"mimeType":"multi_load/iframe","status":"processing","content":"请结合报告上的参考区间。","metaData":{"multiLoad":[]}}]},"errorCode":0,"errorMsg":"success"}
   * event:complete
   * data:{"communication":{"requestId":"med-agent-text-001","responseId":1},"data":{"messages":[{"mimeType":"multi_load/iframe","status":"complete","content":"请结合报告上的参考区间理解各项指标。","metaData":{"multiLoad":[]}}]},"errorCode":0,"errorMsg":"success"}
   * ```
   * SSE 按空行分隔事件。complete 可能携带最终正文，也可能携带空对象，先处理其中已有的业务数据再结束。正文累计快照按更新替换，卡片按 sourceSeq 等业务标识处理。流内收到 error、断开且缺少正常终帧、或收到业务错误时按失败处理。HTTP 请求号与业务请求号分别记录，便于联调排查。
   * ## 6. 错误与重试
   * 先检查 HTTP 状态。HTTP 200 时继续检查业务 errorCode 或结构化 error，SSE 还要读取流内事件至 complete 或 error。流开始后的错误可在 HTTP 200 的连接中通过 event:error 返回。
   * | 状况 | 处理 |
   * | --- | --- |
   * | `INVALID_REQUEST`、`IMAGE_PROCESSING_ERROR`，HTTP 400 | 核对字段类型、会话、图片编码和媒体授权，修正请求。 |
   * | POP 鉴权错误，或 `AUTH_INVALID_KEY`、`AUTH_INVALID_SIGNATURE`、`AUTH_TIMESTAMP_EXPIRED`、`AUTH_NONCE_REPLAY`，业务网关 HTTP 401 | 按对应认证层核对凭据、正文哈希、时间戳与 nonce。签名已过期或 nonce 已使用时，为新尝试重新签名。 |
   * | `DIRECT_AGENT_FORBIDDEN`、`AUTH_APP_FORBIDDEN`、`AUTH_URI_FORBIDDEN`，HTTP 403 | 核对应用身份、接口权限及已开通的模型或 Agent。 |
   * | `SESSION_ACCESS_DENIED`，HTTP 403 | 核对会话与当前业务身份的归属，保持续聊身份一致，不使用其他用户的会话。 |
   * | `ADMISSION_SERVICE_SUSPENDED`、`PLATFORM_ACCESS_DISABLED`、`AUTH_DISABLED`，HTTP 403 | 当前服务、接口或凭据不可用，联系服务方确认恢复或授权，勿持续重试。 |
   * | `PAYLOAD_TOO_LARGE`，HTTP 413 | 缩小正文或图片，按服务约定的大小、像素和资源限制重新提交。 |
   * | `SESSION_BUSY`、`SESSION_CONFLICT`，HTTP 409 | 等待在途请求结束，核对同一会话的身份和历史托管方后再调用。 |
   * | 限流、配额或下游短时不可用，HTTP 429 | 区分可恢复的限流与需要处理授权或配额的情况。适用重试时采用退避，有可用 Retry-After 时采用其秒数。 |
   * | `DOWNSTREAM_TIMEOUT`，HTTP 504，或流内错误、超时、断线 | 记录业务请求号和 POP 请求号。重试前核对原请求的执行情况，新尝试使用新的时间戳、nonce 和签名。 |
   * 失败 JSON 示例
   * ```json
   * {
   *   "error": {
   *     "code": "INVALID_REQUEST",
   *     "message": "请检查请求参数。",
   *     "requestId": "med-agent-text-001"
   *   }
   * }
   * ```
   * 流开始后的错误示例
   * ```text
   * event:error
   * data:{"communication":{"requestId":"med-agent-text-001"},"errorCode":"DOWNSTREAM_TIMEOUT","errorMsg":"downstream timeout"}
   * ```
   * 新请求生成新的时间戳、nonce 和签名。请求号用于关联，重复使用同一个值可能再次执行请求。
   * 
   * @param request - MedicalAgentChatRequest
   * @param headers - MedicalAgentChatHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MedicalAgentChatResponse
   */
  async medicalAgentChatWithOptions(request: $_model.MedicalAgentChatRequest, headers: $_model.MedicalAgentChatHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.MedicalAgentChatResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xDashScopeSSE)) {
      realHeaders["X-DashScope-SSE"] = String(headers.xDashScopeSSE);
    }

    if (!$dara.isNull(headers.xGWAccess)) {
      realHeaders["X-GW-Access"] = String(headers.xGWAccess);
    }

    if (!$dara.isNull(headers.xGWNonce)) {
      realHeaders["X-GW-Nonce"] = String(headers.xGWNonce);
    }

    if (!$dara.isNull(headers.xGWProtocol)) {
      realHeaders["X-GW-Protocol"] = String(headers.xGWProtocol);
    }

    if (!$dara.isNull(headers.xGWSignature)) {
      realHeaders["X-GW-Signature"] = String(headers.xGWSignature);
    }

    if (!$dara.isNull(headers.xGWTimestamp)) {
      realHeaders["X-GW-Timestamp"] = String(headers.xGWTimestamp);
    }

    if (!$dara.isNull(headers.xRequestId)) {
      realHeaders["X-Request-Id"] = String(headers.xRequestId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "MedicalAgentChat",
      version: "2026-11-21",
      protocol: "HTTPS",
      pathname: `/v1/api/medicalQa`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MedicalAgentChatResponse>(await this.callApi(params, req, runtime), new $_model.MedicalAgentChatResponse({}));
  }

  /**
   * 向千问医疗 Agent 提问并获取回答
   * 
   * @remarks
   * # 医疗 Agent 对话接入说明
   * 医疗 Agent 对话通过 UTF-8 JSON 接收文本和已开通的图片内容，提供一次完整 JSON 或 SSE 流式响应。
   * ## 1. 调用与鉴权
   * | 项目 | 写法 |
   * | --- | --- |
   * | 产品与版本 | `QwenB2BMed / 2026-11-21` |
   * | Action | `MedicalAgentChat` |
   * | 方法和路径 | `POST /v1/api/medicalQa` |
   * | 域名 | 使用服务方提供的目标环境 POP Endpoint |
   * | RAM Action | `qwenb2bmed:MedicalAgentChat` |
   * | 编码 | `Content-Type: application/octet-stream`，正文与签名使用同一份 UTF-8 字节 |
   * | 字段协议 | 小驼峰正文发送 `X-GW-Protocol: aliyun-roa` |
   * 阿里云 POP ACS3 使用阿里云 AK/SK 或 STS 凭据。业务 HMAC 使用服务方发放的业务 AK/SK。选择器和媒体能力须获得相应授权。
   * | 请求头 | 类型 | 必填 | 默认值 | 说明 |
   * | --- | --- | --- | --- | --- |
   * | `X-Request-Id` | string | 是 | — | 与正文 `communication.requestId` 一致。 |
   * | `X-GW-Protocol` | string | 使用本文格式时填写 | 兼容旧协议 | 固定 `aliyun-roa`。 |
   * | `X-GW-Access` | string | 是 | — | 业务 AK。 |
   * | `X-GW-Timestamp` | string | 是 | — | Unix 毫秒时间戳。 |
   * | `X-GW-Nonce` | string | 是 | — | 每次请求新生成的随机串。 |
   * | `X-GW-Signature` | string | 是 | — | 业务 HMAC-SHA256 的 64 位小写十六进制值。 |
   * | `Accept`（标准 HTTP 请求头） | string | 否 | — | 可填 application/json 或 text/event-stream。正文中仍须填写 params.responseStreaming。 |
   * | `X-DashScope-SSE` | string | 否 | 无 | 请求 SSE 时可填 enable，正文中仍须填写 params.responseStreaming。 |
   * 每个请求都必须在正文中传入 JSON 布尔值 `params.responseStreaming`。传 `false` 返回完整 JSON，传 `true` 返回 SSE。即使设置了 `Accept` 或 `X-DashScope-SSE`，也须填写此字段。
   * POP 签名器生成 `Authorization`、`x-acs-action`、`x-acs-version`、`x-acs-date`、`x-acs-signature-nonce` 和 `x-acs-content-sha256`。使用 STS 时按签名器要求传安全令牌。业务 SK 与 POP SK 各自在本地用于签名。
   * 业务签名的规范串依次为 METHOD、PATH、CANONICAL_QUERY、BODY_SHA256_HEX、TIMESTAMP、NONCE。各段用单个 LF 连接，末尾无额外 LF。无 query 时第三段留空。有 query 时使用实际请求的编码结果，按 `&` 拆分、去空项、对整项排序并重新用 `&` 连接。SHA-256 按实际发送的 UTF-8 正文字节计算。对规范串做 HMAC-SHA256，输出小写十六进制。使用本接口签名并发起请求的 Python 脚本见第 4 节末尾的「完整签名和调用示例」。
   * ## 2. 请求字段与会话
   * 将下表中的业务对象序列化为 UTF-8 JSON 字节，并用这份字节计算业务签名。使用 HTTP 客户端时，以 `Content-Type: application/octet-stream` 将同一份字节直接写入 POST 正文。使用阿里云通用 OpenAPI SDK 时，将这些字节的可读流设置到 `OpenApiRequest.stream`，填写第 1 节的业务请求头，并指定第 1 节的 Action、Version、ROA 路径和方法。
   * ```ts
   * interface MedicalRequest {
   *   // 会话关联和已授权的业务身份。
   *   communication: {
   *     requestId: string;
   *     sessionId: string;
   *     historyOwner: \\"CLIENT\\" | \\"GATEWAY\\";
   *     appId?: string;
   *     appScene?: string;
   *     userInfo?: { userId?: string; userIp?: string; userName?: string; deviceId?: string };
   *   };
   *   // 非空消息数组。最后一条是本轮 user。
   *   data: { messages: Array<{ role: \\"user\\" | \\"assistant\\"; content: string | ContentBlock[] }> };
   *   // 选择器和本次响应格式见下表。
   *   params: { directAgent?: \\"med_qa\\"; deepthink?: \\"true\\" | \\"false\\"; responseStreaming: boolean; outputAudio?: boolean; [name: string]: unknown };
   * }
   * ```
   * | 字段 | 类型 | 必填 | 默认值 | 说明 | 示例 |
   * | --- | --- | --- | --- | --- | --- |
   * | `communication` | object | 是 | — | 本轮请求、会话及客户身份。 | — |
   * | `communication.requestId` | string | 是 | — | 1–128 位字母、数字、点、下划线、冒号或连字符。与请求头 `X-Request-Id` 完全一致，`gw-ingress-` 前缀为保留值。 | `"med-req-001"` |
   * | `communication.sessionId` | string | 是 | — | 1–512 位字母、数字、点、下划线、冒号或连字符。续聊复用。 | `"med-session-001"` |
   * | `communication.historyOwner` | string | 是 | — | `GATEWAY` 或 `CLIENT`。区分大小写，同一会话保持一致。 | `"CLIENT"` |
   * | `communication.appId` | string | 条件填写 | 凭据的固定应用 | 填写已授权的值。显式值为非空字符串，最多 256 个 UTF-16 代码单元，首尾无空白且不含控制字符。 | `"your-app-id"` |
   * | `communication.appScene` | string | 否 | — | 客户场景标记。 | — |
   * | `communication.userInfo` | object | 否 | — | 客户提供的业务用户信息。 | — |
   * | `communication.userInfo.userId` | string | 否 | 按用户身份规则判断 | 按已开通的用户绑定填写。显式值为非空字符串，最多 256 个 UTF-16 代码单元，首尾无空白且不含控制字符。 | `"user-001"` |
   * | `communication.userInfo.userIp` | string | 否 | — | 客户声明的用户 IP。 | — |
   * | `communication.userInfo.userName` | string | 否 | — | 客户侧用户名。 | — |
   * | `communication.userInfo.deviceId` | string | 否 | — | 客户侧设备标识，最多 256 个 UTF-16 代码单元。可省略；媒体请求实际填写时须非空白且不含控制字符。 | — |
   * | `data` | object | 是 | — | 本轮对话数据。 | — |
   * | `data.messages` | array | 是 | — | 非空。`GATEWAY` 仅传本轮一条 user。`CLIENT` 按 user、assistant 成对提供历史，最后追加本轮 user。 | — |
   * | `data.messages[].role` | string | 是 | — | `user` 或 `assistant`。 | `"user"` |
   * | `data.messages[].content` | string 或 array | 是 | — | 文本或第 3 节所列内容块。 | `"体检报告中的血红蛋白这一项是什么意思？"` |
   * | `params` | object | 是 | 无 | 含必填字段 responseStreaming，其他 Agent 参数按需填写。 | — |
   * | `params.directAgent` | string | 否 | `med_qa` | 显式填写时只接受 `med_qa`。 | `"med_qa"` |
   * | `params.deepthink` | string | 否 | 不主动开启 | 显式使用字符串 `"true"` 开启，使用字符串 `"false"` 关闭。 | `"false"` |
   * | `params.outputAudio` | boolean | 否 | 不主动请求 | 可选 JSON 布尔值。业务已开通 HTTP 音频输出时，true 请求合成音频，false 或省略时不主动请求。按当前响应格式读取 audioFrames 或 SSE 音频帧。 | — |
   * | `params.responseStreaming` | boolean | 是 | 无 | 必须显式填写 JSON 布尔值。`false` 返回完整 JSON，`true` 返回 SSE。 | `false` |
   * 省略 directAgent 时使用 med_qa，显式传入时也只能填 med_qa。支持深思的授权场景传字符串 "true" 开启，传 "false" 或省略时不主动开启。 扩展字段以已开通服务公布的参数为准。 `GATEWAY` 每轮提供一条本轮 user。 `CLIENT` 可携带按 user/assistant 配对的历史，最后附本轮 user。历史 assistant 只传文本。续聊保持 sessionId、historyOwner 和同一业务身份，新一轮可使用新的 requestId。
   * 正文顶层使用 `communication`、`data` 和 `params`，`data` 中使用 `messages`。消息对象包含 `role` 与 `content`，扩展业务参数放在 `params` 中。
   * ## 3. 文本和图片
   * ```ts
   * type ContentBlock =
   *   | { type: \\"text\\"; text: string }
   *   | { type: \\"image_url\\"; imageUrl: string | { url: string } };
   * ```
   * | 字段 | 类型 | 填写条件 | 默认值 | 说明 |
   * | --- | --- | --- | --- | --- |
   * | `content[].type` | string | 使用内容块时 | — | 文字填 `text`，图片填 `image_url`。 |
   * | `content[].text` | string | 文本块 | — | 要发送的文字。 |
   * | `content[].imageUrl` | string 或 object | 图片块 | — | 可访问的 HTTPS 图片地址或 Base64 Data URL。 |
   * | `content[].imageUrl.url` | string | 图片引用为对象时 | — | 对象只包含这个字段。 |
   * 图片块填写 type=image_url；imageUrl 可直接传字符串，也可传仅含 url 的对象。imageUrl.url 支持服务可访问的 HTTPS 图片 URL 或完整 Base64 Data URL，例如 data:image/png;base64, 后接 PNG 文件的标准 Base64，JPEG 使用 data:image/jpeg;base64, 前缀。前缀所声明的 MIME 应与图片内容一致。 申请开通的媒体格式、图片数量和大小以实际服务约定为准。媒体块内保留 `image_url` 枚举，字段名使用 `imageUrl`。
   * 本医疗 API 当前公开的输入范围是文本和图片，内容块使用 `text` 或 `image_url`。这里的 HTTP 音频输出能力不代表支持音频输入；不要据此发送文件、音频或视频内容块。
   * 图片引用可填非空字符串或仅含 `url` 的对象；图片块不传额外的 fileName，文本块只用 type 和 text。`userInfo.deviceId` 可省略，媒体请求实际填写时须非空白且不含控制字符。图片来源、数量、尺寸和大小仍须满足客户已开通的服务范围。
   * ## 4. 完整请求正文示例
   * 示例使用已固定业务应用的凭据。需要显式应用身份时补充获准的 `communication.appId`，发送时将 `X-Request-Id` 设置为正文请求号。
   * ### 4.1 纯文本
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-agent-text-001",
   *     "sessionId": "med-agent-text-001-session",
   *     "historyOwner": "GATEWAY"
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": "请解释报告中参考区间的含义。"
   *       }
   *     ]
   *   },
   *   "params": {
   *     "responseStreaming": false
   *   }
   * }
   * ```
   * ### 4.2 HTTPS 图片
   * 将示例地址替换为服务可访问的真实图片地址。
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-agent-url-001",
   *     "sessionId": "med-agent-url-001-session",
   *     "historyOwner": "GATEWAY"
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": [
   *           {
   *             "type": "text",
   *             "text": "请描述图片中可见的内容。"
   *           },
   *           {
   *             "type": "image_url",
   *             "imageUrl": {
   *               "url": "https://example.com/medical-image.png"
   *             }
   *           }
   *         ]
   *       }
   *     ]
   *   },
   *   "params": {
   *     "responseStreaming": false
   *   }
   * }
   * ```
   * ### 4.3 Base64 图片
   * 下方使用一张合成 PNG 演示字段位置。实际请求使用自己的完整编码。
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-agent-base64-001",
   *     "sessionId": "med-agent-base64-001-session",
   *     "historyOwner": "GATEWAY"
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": [
   *           {
   *             "type": "text",
   *             "text": "请描述图片中可见的内容。"
   *           },
   *           {
   *             "type": "image_url",
   *             "imageUrl": {
   *               "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAb0lEQVR4nO3PAQkAAAyEwO9feoshgnABdLep8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3IPanc8OLDQitxAAAAAElFTkSuQmCC"
   *             }
   *           }
   *         ]
   *       }
   *     ]
   *   },
   *   "params": {
   *     "responseStreaming": false
   *   }
   * }
   * ```
   * 需要 SSE 时，在以上请求中使用 `"responseStreaming": true`，并可使用 `Accept: text/event-stream`。获取完整 JSON 时，显式传入 `false`。
   * #### 完整签名和调用示例
   * 示例从环境变量读取 POP_HOST、两套凭据和可选的 APP_ID、BUSINESS_USER_ID、SESSION_ID。POP_HOST 只填服务方提供的域名，不填协议和路径。脚本发送一条文本请求。设置 STREAM=true 可读取 SSE。
   * ```python
   * import datetime, hashlib, hmac, http.client, json, os, secrets, time
   * def sha(data):
   *     return hashlib.sha256(data).hexdigest()
   * def mac(secret, value):
   *     return hmac.new(secret.encode("utf-8"), value.encode("utf-8"), hashlib.sha256).hexdigest()
   * host = os.environ["POP_HOST"]
   * path = "/v1/api/medicalQa"
   * request_id = "chat-" + secrets.token_hex(12)
   * stream = os.environ.get("STREAM", "false").lower() == "true"
   * communication = {
   *     "requestId": request_id,
   *     "sessionId": os.environ.get("SESSION_ID", "session-" + secrets.token_hex(12)),
   *     "historyOwner": "GATEWAY",
   * }
   * if os.environ.get("APP_ID"):
   *     communication["appId"] = os.environ["APP_ID"]
   * if os.environ.get("BUSINESS_USER_ID"):
   *     communication["userInfo"] = {"userId": os.environ["BUSINESS_USER_ID"]}
   * body = {
   *     "communication": communication,
   *     "data": {"messages": [{"role": "user", "content": "请解释报告中参考区间的含义。"}]},
   *     "params": {"responseStreaming": stream},
   * }
   * payload = json.dumps(body, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
   * payload_hash = sha(payload)
   * timestamp, nonce = str(time.time_ns() // 1_000_000), secrets.token_hex(16)
   * gateway_string = "\\n".join(("POST", path, "", payload_hash, timestamp, nonce))
   * headers = {
   *     "host": host,
   *     "content-type": "application/octet-stream",
   *     "accept": "text/event-stream" if stream else "application/json",
   *     "x-acs-action": "MedicalAgentChat",
   *     "x-acs-version": "2026-11-21",
   *     "x-acs-date": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
   *     "x-acs-signature-nonce": secrets.token_hex(16),
   *     "x-acs-content-sha256": payload_hash,
   *     "x-gw-protocol": "aliyun-roa",
   *     "x-request-id": request_id,
   *     "x-gw-access": os.environ["GW_ACCESS_KEY_ID"],
   *     "x-gw-timestamp": timestamp,
   *     "x-gw-nonce": nonce,
   *     "x-gw-signature": mac(os.environ["GW_ACCESS_KEY_SECRET"], gateway_string),
   * }
   * if os.environ.get("POP_SECURITY_TOKEN"):
   *     headers["x-acs-security-token"] = os.environ["POP_SECURITY_TOKEN"]
   * signed_names = sorted(k for k in headers if k in ("host", "content-type") or k.startswith("x-acs-"))
   * canonical_headers = "".join(k + ":" + headers[k].strip() + "\\n" for k in signed_names)
   * signed_headers = ";".join(signed_names)
   * canonical_request = "\\n".join(("POST", path, "", canonical_headers, signed_headers, payload_hash))
   * pop_signature = mac(os.environ["POP_ACCESS_KEY_SECRET"], "ACS3-HMAC-SHA256\\n" + sha(canonical_request.encode("utf-8")))
   * headers["authorization"] = (
   *     "ACS3-HMAC-SHA256 Credential=" + os.environ["POP_ACCESS_KEY_ID"]
   *     + ",SignedHeaders=" + signed_headers + ",Signature=" + pop_signature
   * )
   * connection = http.client.HTTPSConnection(host, timeout=120)
   * try:
   *     connection.request("POST", path, body=payload, headers=headers)
   *     response = connection.getresponse()
   *     print("HTTP", response.status, "业务 RequestId:", request_id,
   *           "POP RequestId:", response.getheader("x-acs-request-id"))
   *     if "text/event-stream" in (response.getheader("content-type") or "").lower():
   *         # 打印保留 SSE 空行；业务集成应按空行组装事件并检查 complete/error。
   *         while True:
   *             line = response.readline()
   *             if not line:
   *                 break
   *             print(line.decode("utf-8"), end="")
   *     else:
   *         print(response.read().decode("utf-8"))
   * finally:
   *     connection.close()
   * ```
   * ## 5. 响应
   * ```ts
   * interface MedicalResponse {
   *   requestId?: string;
   *   communication?: { requestId?: string; sessionId?: string; responseId?: number };
   *   data?: {
   *     messages?: Array<{
   *       mimeType?: string;
   *       status?: string;
   *       content?: unknown;
   *       metaData?: {
   *         sourceSeq?: string; type?: string; barTitle?: string; content?: unknown;
   *         multiLoad?: Array<{ type?: string; sourceSeq?: string; content?: unknown }>;
   *       };
   *     }>;
   *     // 可选业务调试信息，可为 null；内容以实际返回为准。
   *     debug?: unknown;
   *     extraInfo?: { inputResources?: Array<{
   *       contentIndex?: number; type?: string; resourceId?: string; url?: string; fileName?: string;
   *     }> };
   *   };
   *   audioFrames?: Array<{
   *     type?: string; data?: string; last?: boolean; code?: string; message?: string; requestId?: string;
   *   }>;
   *   errorCode?: string | number;
   *   errorMsg?: string;
   *   error?: { code?: string | number; message?: string; requestId?: string };
   * }
   * ```
   * | 字段 | 类型 | 是否总有 | 默认值 | 说明 |
   * | --- | --- | --- | --- | --- |
   * | `requestId` | string | 否 | — | 业务关联号。POP 请求号见 x-acs-request-id。 |
   * | `communication` | object | 否 | — | 客户请求、会话与业务响应帧的关联信息。 |
   * | `communication.requestId/sessionId` | string | 否 | — | 与该业务请求及会话关联。 |
   * | `communication.responseId` | integer | 否 | — | 业务响应帧标识。完整 JSON 聚合时可为 0，SSE 按接收顺序处理，编号无需连续。 |
   * | `data.messages` | array | 否 | — | 正文、过程或卡片消息，依据 mimeType 解析。 |
   * | `data.messages[].mimeType` | string | 否 | — | 消息内容或过程类型。 |
   * | `data.messages[].status` | string | 否 | — | 该条消息状态。 |
   * | `data.messages[].content` | JSON | 否 | — | 当前消息正文或结构化内容。 |
   * | `data.messages[].metaData` | object | 否 | — | 可选的医疗检索进度或正文卡片信息，依据所在消息的 mimeType 解析。 |
   * | `metaData.sourceSeq/type/barTitle/content` | string 或 JSON | 否 | — | sourceSeq 关联同一进度模块；type 区分模块，barTitle 为可选标题，content 为该类型的可选业务内容。 |
   * | `metaData.multiLoad` | array | 否 | — | 正文卡片列表，各项可含 type、sourceSeq 和任意 JSON 的 content；可为空或省略，不保证每轮生成。 |
   * | `data.debug` | 任意 JSON（含 null） | 否 | — | 可选业务调试信息。是否返回、出现时机和内容按实际执行结果；不保证每轮或结束事件必有，也不用于判断业务完成。 |
   * | `data.extraInfo.inputResources` | array | 否 | — | 有结果时提供输入资源处理信息。各项可含 contentIndex、type、resourceId、url 和 fileName。 |
   * | `audioFrames` | array | 否 | — | 已开通对应输出时可能返回音频帧。各项可含 type、Base64 数据 data、末帧 last 或错误 code、message、requestId。 |
   * | `errorCode` | string 或 number | 否 | — | 0 表示业务成功。非 0 时读取 errorMsg 或 error，SSE 同时处理 error 事件。 |
   * | `errorMsg` | string | 否 | — | 服务返回的状态描述。 |
   * | `error` | object | 否 | — | 结构化业务错误，按 code 判断。 |
   * 医疗 Agent 的过程消息与正文分开处理：SSE 中可能返回 `mimeType=bar/progress` 的消息，`metaData.sourceSeq` 关联同一模块的更新。资料检索模块的 `metaData.type` 可为 `bar_ref_source_inline`，其 `metaData.content` 可含 `query_list`（检索词数组）、`docs`（当前资料对象数组）和 `status`。这两个数组键按实际报文保留拼写。`docs` 中的字段随资料来源变化，可能为空，不要求每个对象都具备同一组字段。过程消息只按实际收到的内容展示，不保证每轮都有。
   * 正文可能包含 `[(sourceSeq)]` 卡片占位，与 `metaData.multiLoad` 中同一 `sourceSeq` 的卡片关联；卡片的 `type` 和 `content` 按实际返回解析，不能把普通资料列表自行当成正文卡片。遇到未支持的卡片类型，可跳过卡片并继续读取正文。一次完整 JSON 仍按 `data.messages` 读取应答，不能要求它复现 SSE 中的全部中间过程。
   * 一次完整 JSON 的成功示例
   * `debug: null` 仅演示此可选字段的空值形状，不表示每次都会返回。客户端不应据此推定固定的调试子字段。
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-agent-text-001",
   *     "responseId": 0
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "mimeType": "multi_load/iframe",
   *         "status": "complete",
   *         "content": "请结合报告上的参考区间理解各项指标。",
   *         "metaData": {
   *           "multiLoad": []
   *         }
   *       }
   *     ],
   *     "debug": null
   *   },
   *   "errorCode": 0,
   *   "errorMsg": "success"
   * }
   * ```
   * SSE 示例
   * ```text
   * data:{"communication":{"requestId":"med-agent-text-001","responseId":0},"data":{"messages":[{"mimeType":"multi_load/iframe","status":"processing","content":"请结合报告上的参考区间。","metaData":{"multiLoad":[]}}]},"errorCode":0,"errorMsg":"success"}
   * event:complete
   * data:{"communication":{"requestId":"med-agent-text-001","responseId":1},"data":{"messages":[{"mimeType":"multi_load/iframe","status":"complete","content":"请结合报告上的参考区间理解各项指标。","metaData":{"multiLoad":[]}}]},"errorCode":0,"errorMsg":"success"}
   * ```
   * SSE 按空行分隔事件。complete 可能携带最终正文，也可能携带空对象，先处理其中已有的业务数据再结束。正文累计快照按更新替换，卡片按 sourceSeq 等业务标识处理。流内收到 error、断开且缺少正常终帧、或收到业务错误时按失败处理。HTTP 请求号与业务请求号分别记录，便于联调排查。
   * ## 6. 错误与重试
   * 先检查 HTTP 状态。HTTP 200 时继续检查业务 errorCode 或结构化 error，SSE 还要读取流内事件至 complete 或 error。流开始后的错误可在 HTTP 200 的连接中通过 event:error 返回。
   * | 状况 | 处理 |
   * | --- | --- |
   * | `INVALID_REQUEST`、`IMAGE_PROCESSING_ERROR`，HTTP 400 | 核对字段类型、会话、图片编码和媒体授权，修正请求。 |
   * | POP 鉴权错误，或 `AUTH_INVALID_KEY`、`AUTH_INVALID_SIGNATURE`、`AUTH_TIMESTAMP_EXPIRED`、`AUTH_NONCE_REPLAY`，业务网关 HTTP 401 | 按对应认证层核对凭据、正文哈希、时间戳与 nonce。签名已过期或 nonce 已使用时，为新尝试重新签名。 |
   * | `DIRECT_AGENT_FORBIDDEN`、`AUTH_APP_FORBIDDEN`、`AUTH_URI_FORBIDDEN`，HTTP 403 | 核对应用身份、接口权限及已开通的模型或 Agent。 |
   * | `SESSION_ACCESS_DENIED`，HTTP 403 | 核对会话与当前业务身份的归属，保持续聊身份一致，不使用其他用户的会话。 |
   * | `ADMISSION_SERVICE_SUSPENDED`、`PLATFORM_ACCESS_DISABLED`、`AUTH_DISABLED`，HTTP 403 | 当前服务、接口或凭据不可用，联系服务方确认恢复或授权，勿持续重试。 |
   * | `PAYLOAD_TOO_LARGE`，HTTP 413 | 缩小正文或图片，按服务约定的大小、像素和资源限制重新提交。 |
   * | `SESSION_BUSY`、`SESSION_CONFLICT`，HTTP 409 | 等待在途请求结束，核对同一会话的身份和历史托管方后再调用。 |
   * | 限流、配额或下游短时不可用，HTTP 429 | 区分可恢复的限流与需要处理授权或配额的情况。适用重试时采用退避，有可用 Retry-After 时采用其秒数。 |
   * | `DOWNSTREAM_TIMEOUT`，HTTP 504，或流内错误、超时、断线 | 记录业务请求号和 POP 请求号。重试前核对原请求的执行情况，新尝试使用新的时间戳、nonce 和签名。 |
   * 失败 JSON 示例
   * ```json
   * {
   *   "error": {
   *     "code": "INVALID_REQUEST",
   *     "message": "请检查请求参数。",
   *     "requestId": "med-agent-text-001"
   *   }
   * }
   * ```
   * 流开始后的错误示例
   * ```text
   * event:error
   * data:{"communication":{"requestId":"med-agent-text-001"},"errorCode":"DOWNSTREAM_TIMEOUT","errorMsg":"downstream timeout"}
   * ```
   * 新请求生成新的时间戳、nonce 和签名。请求号用于关联，重复使用同一个值可能再次执行请求。
   * 
   * @param request - MedicalAgentChatRequest
   * @returns MedicalAgentChatResponse
   */
  async medicalAgentChat(request: $_model.MedicalAgentChatRequest): Promise<$_model.MedicalAgentChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.MedicalAgentChatHeaders({ });
    return await this.medicalAgentChatWithOptions(request, headers, runtime);
  }

  /**
   * 指定医疗模型进行推理
   * 
   * @remarks
   * # 医疗模型推理接入说明
   * 医疗模型推理通过 UTF-8 JSON 接收文本和已开通的图片内容，提供一次完整 JSON 或 SSE 流式响应。
   * ## 1. 调用与鉴权
   * | 项目 | 写法 |
   * | --- | --- |
   * | 产品与版本 | `QwenB2BMed / 2026-11-21` |
   * | Action | `MedicalModelInference` |
   * | 方法和路径 | `POST /v1/api/directModel` |
   * | 域名 | 使用服务方提供的目标环境 POP Endpoint |
   * | RAM Action | `qwenb2bmed:MedicalModelInference` |
   * | 编码 | `Content-Type: application/octet-stream`，正文与签名使用同一份 UTF-8 字节 |
   * | 字段协议 | 小驼峰正文发送 `X-GW-Protocol: aliyun-roa` |
   * 阿里云 POP ACS3 使用阿里云 AK/SK 或 STS 凭据。业务 HMAC 使用服务方发放的业务 AK/SK。选择器和媒体能力须获得相应授权。
   * | 请求头 | 类型 | 必填 | 默认值 | 说明 |
   * | --- | --- | --- | --- | --- |
   * | `X-Request-Id` | string | 是 | — | 与正文 `communication.requestId` 一致。 |
   * | `X-GW-Protocol` | string | 使用本文格式时填写 | 兼容旧协议 | 固定 `aliyun-roa`。 |
   * | `X-GW-Access` | string | 是 | — | 业务 AK。 |
   * | `X-GW-Timestamp` | string | 是 | — | Unix 毫秒时间戳。 |
   * | `X-GW-Nonce` | string | 是 | — | 每次请求新生成的随机串。 |
   * | `X-GW-Signature` | string | 是 | — | 业务 HMAC-SHA256 的 64 位小写十六进制值。 |
   * | `Accept`（标准 HTTP 请求头） | string | 否 | — | 可填 application/json 或 text/event-stream。正文中仍须填写 params.responseStreaming。 |
   * | `X-DashScope-SSE` | string | 否 | 无 | 请求 SSE 时可填 enable，正文中仍须填写 params.responseStreaming。 |
   * 每个请求都必须在正文中传入 JSON 布尔值 `params.responseStreaming`。传 `false` 返回完整 JSON，传 `true` 返回 SSE。即使设置了 `Accept` 或 `X-DashScope-SSE`，也须填写此字段。
   * POP 签名器生成 `Authorization`、`x-acs-action`、`x-acs-version`、`x-acs-date`、`x-acs-signature-nonce` 和 `x-acs-content-sha256`。使用 STS 时按签名器要求传安全令牌。业务 SK 与 POP SK 各自在本地用于签名。
   * 业务签名的规范串依次为 METHOD、PATH、CANONICAL_QUERY、BODY_SHA256_HEX、TIMESTAMP、NONCE。各段用单个 LF 连接，末尾无额外 LF。无 query 时第三段留空。有 query 时使用实际请求的编码结果，按 `&` 拆分、去空项、对整项排序并重新用 `&` 连接。SHA-256 按实际发送的 UTF-8 正文字节计算。对规范串做 HMAC-SHA256，输出小写十六进制。使用本接口签名并发起请求的 Python 脚本见第 4 节末尾的「完整签名和调用示例」。
   * ## 2. 请求字段与会话
   * 将下表中的业务对象序列化为 UTF-8 JSON 字节，并用这份字节计算业务签名。使用 HTTP 客户端时，以 `Content-Type: application/octet-stream` 将同一份字节直接写入 POST 正文。使用阿里云通用 OpenAPI SDK 时，将这些字节的可读流设置到 `OpenApiRequest.stream`，填写第 1 节的业务请求头，并指定第 1 节的 Action、Version、ROA 路径和方法。
   * ```ts
   * interface MedicalRequest {
   *   // 会话关联和已授权的业务身份。
   *   communication: {
   *     requestId: string;
   *     sessionId: string;
   *     historyOwner: \\"CLIENT\\" | \\"GATEWAY\\";
   *     appId?: string;
   *     appScene?: string;
   *     userInfo?: { userId?: string; userIp?: string; userName?: string; deviceId?: string };
   *   };
   *   // 非空消息数组。最后一条是本轮 user。
   *   data: { messages: Array<{ role: \\"user\\" | \\"assistant\\"; content: string | ContentBlock[] }> };
   *   // 选择器和本次响应格式见下表。
   *   params: { modelName: \\"med_qwen4-vl-125\\"; responseStreaming: boolean; outputAudio?: boolean; [name: string]: unknown };
   * }
   * ```
   * | 字段 | 类型 | 必填 | 默认值 | 说明 | 示例 |
   * | --- | --- | --- | --- | --- | --- |
   * | `communication` | object | 是 | — | 本轮请求、会话及客户身份。 | — |
   * | `communication.requestId` | string | 是 | — | 1–128 位字母、数字、点、下划线、冒号或连字符。与请求头 `X-Request-Id` 完全一致，`gw-ingress-` 前缀为保留值。 | `"med-req-001"` |
   * | `communication.sessionId` | string | 是 | — | 1–512 位字母、数字、点、下划线、冒号或连字符。续聊复用。 | `"med-session-001"` |
   * | `communication.historyOwner` | string | 是 | — | `GATEWAY` 或 `CLIENT`。区分大小写，同一会话保持一致。 | `"CLIENT"` |
   * | `communication.appId` | string | 条件填写 | 凭据的固定应用 | 填写已授权的值。显式值为非空字符串，最多 256 个 UTF-16 代码单元，首尾无空白且不含控制字符。 | `"your-app-id"` |
   * | `communication.appScene` | string | 否 | — | 客户场景标记。 | — |
   * | `communication.userInfo` | object | 否 | — | 客户提供的业务用户信息。 | — |
   * | `communication.userInfo.userId` | string | 否 | 按用户身份规则判断 | 按已开通的用户绑定填写。显式值为非空字符串，最多 256 个 UTF-16 代码单元，首尾无空白且不含控制字符。 | `"user-001"` |
   * | `communication.userInfo.userIp` | string | 否 | — | 客户声明的用户 IP。 | — |
   * | `communication.userInfo.userName` | string | 否 | — | 客户侧用户名。 | — |
   * | `communication.userInfo.deviceId` | string | 否 | — | 客户侧设备标识，最多 256 个 UTF-16 代码单元。可省略；媒体请求实际填写时须非空白且不含控制字符。 | — |
   * | `data` | object | 是 | — | 本轮对话数据。 | — |
   * | `data.messages` | array | 是 | — | 非空。`GATEWAY` 仅传本轮一条 user。`CLIENT` 按 user、assistant 成对提供历史，最后追加本轮 user。 | — |
   * | `data.messages[].role` | string | 是 | — | `user` 或 `assistant`。 | `"user"` |
   * | `data.messages[].content` | string 或 array | 是 | — | 文本或第 3 节所列内容块。 | `"体检报告中的血红蛋白这一项是什么意思？"` |
   * | `params` | object | 是 | — | 模型选择和推理参数。 | — |
   * | `params.modelName` | string | 是 | — | 选择已开通的模型。值区分大小写，首尾无空白。当前版本为 `med_qwen4-vl-125`。 | `"med_qwen4-vl-125"` |
   * | `params.outputAudio` | boolean | 否 | 不主动请求 | 可选 JSON 布尔值。业务已开通 HTTP 音频输出时，true 请求合成音频，false 或省略时不主动请求。按当前响应格式读取 audioFrames 或 SSE 音频帧。 | — |
   * | `params.responseStreaming` | boolean | 是 | 无 | 必须显式填写 JSON 布尔值。`false` 返回完整 JSON，`true` 返回 SSE。 | `false` |
   * modelName 填服务方为客户开通的模型选择器，当前版本为 med_qwen4-vl-125。本入口使用 modelName 选择模型，`params.directAgent` 会导致请求失败。当前公开的 med_qwen4-vl-125 模型服务执行非思考推理，按该模型已开通的文本和图像能力调用。 扩展字段以已开通服务公布的参数为准。 `GATEWAY` 每轮提供一条本轮 user。 `CLIENT` 可携带按 user/assistant 配对的历史，最后附本轮 user。历史 assistant 只传文本。续聊保持 sessionId、historyOwner 和同一业务身份，新一轮可使用新的 requestId。
   * 正文顶层使用 `communication`、`data` 和 `params`，`data` 中使用 `messages`。消息对象包含 `role` 与 `content`，扩展业务参数放在 `params` 中。
   * ## 3. 文本和图片
   * ```ts
   * type ContentBlock =
   *   | { type: \\"text\\"; text: string }
   *   | { type: \\"image_url\\"; imageUrl: string | { url: string } };
   * ```
   * | 字段 | 类型 | 填写条件 | 默认值 | 说明 |
   * | --- | --- | --- | --- | --- |
   * | `content[].type` | string | 使用内容块时 | — | 文字填 `text`，图片填 `image_url`。 |
   * | `content[].text` | string | 文本块 | — | 要发送的文字。 |
   * | `content[].imageUrl` | string 或 object | 图片块 | — | 可访问的 HTTPS 图片地址或 Base64 Data URL。 |
   * | `content[].imageUrl.url` | string | 图片引用为对象时 | — | 对象只包含这个字段。 |
   * 图片块填写 type=image_url；imageUrl 可直接传字符串，也可传仅含 url 的对象。imageUrl.url 支持服务可访问的 HTTPS 图片 URL 或完整 Base64 Data URL，例如 data:image/png;base64, 后接 PNG 文件的标准 Base64，JPEG 使用 data:image/jpeg;base64, 前缀。前缀所声明的 MIME 应与图片内容一致。 申请开通的媒体格式、图片数量和大小以实际服务约定为准。媒体块内保留 `image_url` 枚举，字段名使用 `imageUrl`。
   * 本医疗 API 当前公开的输入范围是文本和图片，内容块使用 `text` 或 `image_url`。这里的 HTTP 音频输出能力不代表支持音频输入；不要据此发送文件、音频或视频内容块。
   * 图片引用可填非空字符串或仅含 `url` 的对象；图片块不传额外的 fileName，文本块只用 type 和 text。`userInfo.deviceId` 可省略，媒体请求实际填写时须非空白且不含控制字符。图片来源、数量、尺寸和大小仍须满足客户已开通的服务范围。
   * ## 4. 完整请求正文示例
   * 示例使用已固定业务应用的凭据。需要显式应用身份时补充获准的 `communication.appId`，发送时将 `X-Request-Id` 设置为正文请求号。
   * ### 4.1 纯文本
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-model-text-001",
   *     "sessionId": "med-model-text-001-session",
   *     "historyOwner": "GATEWAY"
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": "请解释报告中参考区间的含义。"
   *       }
   *     ]
   *   },
   *   "params": {
   *     "responseStreaming": false,
   *     "modelName": "med_qwen4-vl-125"
   *   }
   * }
   * ```
   * ### 4.2 HTTPS 图片
   * 将示例地址替换为服务可访问的真实图片地址。
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-model-url-001",
   *     "sessionId": "med-model-url-001-session",
   *     "historyOwner": "GATEWAY"
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": [
   *           {
   *             "type": "text",
   *             "text": "请描述图片中可见的内容。"
   *           },
   *           {
   *             "type": "image_url",
   *             "imageUrl": {
   *               "url": "https://example.com/medical-image.png"
   *             }
   *           }
   *         ]
   *       }
   *     ]
   *   },
   *   "params": {
   *     "responseStreaming": false,
   *     "modelName": "med_qwen4-vl-125"
   *   }
   * }
   * ```
   * ### 4.3 Base64 图片
   * 下方使用一张合成 PNG 演示字段位置。实际请求使用自己的完整编码。
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-model-base64-001",
   *     "sessionId": "med-model-base64-001-session",
   *     "historyOwner": "GATEWAY"
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": [
   *           {
   *             "type": "text",
   *             "text": "请描述图片中可见的内容。"
   *           },
   *           {
   *             "type": "image_url",
   *             "imageUrl": {
   *               "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAb0lEQVR4nO3PAQkAAAyEwO9feoshgnABdLep8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3IPanc8OLDQitxAAAAAElFTkSuQmCC"
   *             }
   *           }
   *         ]
   *       }
   *     ]
   *   },
   *   "params": {
   *     "responseStreaming": false,
   *     "modelName": "med_qwen4-vl-125"
   *   }
   * }
   * ```
   * 需要 SSE 时，在以上请求中使用 `"responseStreaming": true`，并可使用 `Accept: text/event-stream`。获取完整 JSON 时，显式传入 `false`。
   * #### 完整签名和调用示例
   * 示例从环境变量读取 POP_HOST、两套凭据和可选的 APP_ID、BUSINESS_USER_ID、SESSION_ID。POP_HOST 只填服务方提供的域名，不填协议和路径。脚本发送一条文本请求。设置 STREAM=true 可读取 SSE。
   * ```python
   * import datetime, hashlib, hmac, http.client, json, os, secrets, time
   * def sha(data):
   *     return hashlib.sha256(data).hexdigest()
   * def mac(secret, value):
   *     return hmac.new(secret.encode("utf-8"), value.encode("utf-8"), hashlib.sha256).hexdigest()
   * host = os.environ["POP_HOST"]
   * path = "/v1/api/directModel"
   * request_id = "chat-" + secrets.token_hex(12)
   * stream = os.environ.get("STREAM", "false").lower() == "true"
   * communication = {
   *     "requestId": request_id,
   *     "sessionId": os.environ.get("SESSION_ID", "session-" + secrets.token_hex(12)),
   *     "historyOwner": "GATEWAY",
   * }
   * if os.environ.get("APP_ID"):
   *     communication["appId"] = os.environ["APP_ID"]
   * if os.environ.get("BUSINESS_USER_ID"):
   *     communication["userInfo"] = {"userId": os.environ["BUSINESS_USER_ID"]}
   * body = {
   *     "communication": communication,
   *     "data": {"messages": [{"role": "user", "content": "请解释报告中参考区间的含义。"}]},
   *     "params": {"modelName": "med_qwen4-vl-125", "responseStreaming": stream},
   * }
   * payload = json.dumps(body, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
   * payload_hash = sha(payload)
   * timestamp, nonce = str(time.time_ns() // 1_000_000), secrets.token_hex(16)
   * gateway_string = "\\n".join(("POST", path, "", payload_hash, timestamp, nonce))
   * headers = {
   *     "host": host,
   *     "content-type": "application/octet-stream",
   *     "accept": "text/event-stream" if stream else "application/json",
   *     "x-acs-action": "MedicalModelInference",
   *     "x-acs-version": "2026-11-21",
   *     "x-acs-date": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
   *     "x-acs-signature-nonce": secrets.token_hex(16),
   *     "x-acs-content-sha256": payload_hash,
   *     "x-gw-protocol": "aliyun-roa",
   *     "x-request-id": request_id,
   *     "x-gw-access": os.environ["GW_ACCESS_KEY_ID"],
   *     "x-gw-timestamp": timestamp,
   *     "x-gw-nonce": nonce,
   *     "x-gw-signature": mac(os.environ["GW_ACCESS_KEY_SECRET"], gateway_string),
   * }
   * if os.environ.get("POP_SECURITY_TOKEN"):
   *     headers["x-acs-security-token"] = os.environ["POP_SECURITY_TOKEN"]
   * signed_names = sorted(k for k in headers if k in ("host", "content-type") or k.startswith("x-acs-"))
   * canonical_headers = "".join(k + ":" + headers[k].strip() + "\\n" for k in signed_names)
   * signed_headers = ";".join(signed_names)
   * canonical_request = "\\n".join(("POST", path, "", canonical_headers, signed_headers, payload_hash))
   * pop_signature = mac(os.environ["POP_ACCESS_KEY_SECRET"], "ACS3-HMAC-SHA256\\n" + sha(canonical_request.encode("utf-8")))
   * headers["authorization"] = (
   *     "ACS3-HMAC-SHA256 Credential=" + os.environ["POP_ACCESS_KEY_ID"]
   *     + ",SignedHeaders=" + signed_headers + ",Signature=" + pop_signature
   * )
   * connection = http.client.HTTPSConnection(host, timeout=120)
   * try:
   *     connection.request("POST", path, body=payload, headers=headers)
   *     response = connection.getresponse()
   *     print("HTTP", response.status, "业务 RequestId:", request_id,
   *           "POP RequestId:", response.getheader("x-acs-request-id"))
   *     if "text/event-stream" in (response.getheader("content-type") or "").lower():
   *         # 打印保留 SSE 空行；业务集成应按空行组装事件并检查 complete/error。
   *         while True:
   *             line = response.readline()
   *             if not line:
   *                 break
   *             print(line.decode("utf-8"), end="")
   *     else:
   *         print(response.read().decode("utf-8"))
   * finally:
   *     connection.close()
   * ```
   * ## 5. 响应
   * ```ts
   * interface MedicalResponse {
   *   requestId?: string;
   *   communication?: { requestId?: string; sessionId?: string; responseId?: number };
   *   data?: {
   *     messages?: Array<{
   *       mimeType?: string;
   *       status?: string;
   *       content?: unknown;
   *       metaData?: {
   *         sourceSeq?: string; type?: string; barTitle?: string; content?: unknown;
   *         multiLoad?: Array<{ type?: string; sourceSeq?: string; content?: unknown }>;
   *       };
   *     }>;
   *     // 可选业务调试信息，可为 null；内容以实际返回为准。
   *     debug?: unknown;
   *     extraInfo?: { inputResources?: Array<{
   *       contentIndex?: number; type?: string; resourceId?: string; url?: string; fileName?: string;
   *     }> };
   *   };
   *   audioFrames?: Array<{
   *     type?: string; data?: string; last?: boolean; code?: string; message?: string; requestId?: string;
   *   }>;
   *   errorCode?: string | number;
   *   errorMsg?: string;
   *   error?: { code?: string | number; message?: string; requestId?: string };
   * }
   * ```
   * | 字段 | 类型 | 是否总有 | 默认值 | 说明 |
   * | --- | --- | --- | --- | --- |
   * | `requestId` | string | 否 | — | 业务关联号。POP 请求号见 x-acs-request-id。 |
   * | `communication` | object | 否 | — | 客户请求、会话与业务响应帧的关联信息。 |
   * | `communication.requestId/sessionId` | string | 否 | — | 与该业务请求及会话关联。 |
   * | `communication.responseId` | integer | 否 | — | 业务响应帧标识。完整 JSON 聚合时可为 0，SSE 按接收顺序处理，编号无需连续。 |
   * | `data.messages` | array | 否 | — | 正文、过程或卡片消息，依据 mimeType 解析。 |
   * | `data.messages[].mimeType` | string | 否 | — | 消息内容或过程类型。 |
   * | `data.messages[].status` | string | 否 | — | 该条消息状态。 |
   * | `data.messages[].content` | JSON | 否 | — | 当前消息正文或结构化内容。 |
   * | `data.messages[].metaData` | object | 否 | — | 可选的消息附加信息；当前模型不承诺返回医疗 Agent 的检索进度、来源列表或业务卡片。 |
   * | `metaData.sourceSeq/type/barTitle/content` | string 或 JSON | 否 | — | 存在时按实际返回的标识、类型、标题和内容解释；不是本模型接口的固定必返字段。 |
   * | `metaData.multiLoad` | array | 否 | — | 为兼容已有响应形状保留的可选列表，可为空或省略；当前模型不保证生成 Agent 业务卡片。 |
   * | `data.debug` | 任意 JSON（含 null） | 否 | — | 可选业务调试信息。是否返回、出现时机和内容按实际执行结果；不保证每轮或结束事件必有，也不用于判断业务完成。 |
   * | `data.extraInfo.inputResources` | array | 否 | — | 有结果时提供输入资源处理信息。各项可含 contentIndex、type、resourceId、url 和 fileName。 |
   * | `audioFrames` | array | 否 | — | 已开通对应输出时可能返回音频帧。各项可含 type、Base64 数据 data、末帧 last 或错误 code、message、requestId。 |
   * | `errorCode` | string 或 number | 否 | — | 0 表示业务成功。非 0 时读取 errorMsg 或 error，SSE 同时处理 error 事件。 |
   * | `errorMsg` | string | 否 | — | 服务返回的状态描述。 |
   * | `error` | object | 否 | — | 结构化业务错误，按 code 判断。 |
   * 当前医疗模型推理主要返回模型回答正文，按 `mimeType=multi_load/iframe` 读取 `content`；SSE 中正文可以累计快照更新，完整 JSON 返回聚合后的正文。不要由可选 `metaData` 字段推断本接口提供医疗 Agent 的检索过程、资料来源或业务卡片。
   * 一次完整 JSON 的成功示例
   * `debug: null` 仅演示此可选字段的空值形状，不表示每次都会返回。客户端不应据此推定固定的调试子字段。
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-model-text-001",
   *     "responseId": 0
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "mimeType": "multi_load/iframe",
   *         "status": "complete",
   *         "content": "请结合报告上的参考区间理解各项指标。",
   *         "metaData": {
   *           "multiLoad": []
   *         }
   *       }
   *     ],
   *     "debug": null
   *   },
   *   "errorCode": 0,
   *   "errorMsg": "success"
   * }
   * ```
   * SSE 示例
   * ```text
   * data:{"communication":{"requestId":"med-model-text-001","responseId":0},"data":{"messages":[{"mimeType":"multi_load/iframe","status":"processing","content":"请结合报告上的参考区间。","metaData":{"multiLoad":[]}}]},"errorCode":0,"errorMsg":"success"}
   * event:complete
   * data:{"communication":{"requestId":"med-model-text-001","responseId":1},"data":{"messages":[{"mimeType":"multi_load/iframe","status":"complete","content":"请结合报告上的参考区间理解各项指标。","metaData":{"multiLoad":[]}}]},"errorCode":0,"errorMsg":"success"}
   * ```
   * SSE 按空行分隔事件。complete 可能携带最终正文，也可能携带空对象，先处理其中已有的业务数据再结束。正文累计快照按更新替换，不把快照重复拼接。流内收到 error、断开且缺少正常终帧、或收到业务错误时按失败处理。HTTP 请求号与业务请求号分别记录，便于联调排查。
   * ## 6. 错误与重试
   * 先检查 HTTP 状态。HTTP 200 时继续检查业务 errorCode 或结构化 error，SSE 还要读取流内事件至 complete 或 error。流开始后的错误可在 HTTP 200 的连接中通过 event:error 返回。
   * | 状况 | 处理 |
   * | --- | --- |
   * | `INVALID_REQUEST`、`IMAGE_PROCESSING_ERROR`，HTTP 400 | 核对字段类型、会话、图片编码和媒体授权，修正请求。 |
   * | POP 鉴权错误，或 `AUTH_INVALID_KEY`、`AUTH_INVALID_SIGNATURE`、`AUTH_TIMESTAMP_EXPIRED`、`AUTH_NONCE_REPLAY`，业务网关 HTTP 401 | 按对应认证层核对凭据、正文哈希、时间戳与 nonce。签名已过期或 nonce 已使用时，为新尝试重新签名。 |
   * | `DIRECT_AGENT_FORBIDDEN`、`AUTH_APP_FORBIDDEN`、`AUTH_URI_FORBIDDEN`，HTTP 403 | 核对应用身份、接口权限及已开通的模型或 Agent。 |
   * | `SESSION_ACCESS_DENIED`，HTTP 403 | 核对会话与当前业务身份的归属，保持续聊身份一致，不使用其他用户的会话。 |
   * | `ADMISSION_SERVICE_SUSPENDED`、`PLATFORM_ACCESS_DISABLED`、`AUTH_DISABLED`，HTTP 403 | 当前服务、接口或凭据不可用，联系服务方确认恢复或授权，勿持续重试。 |
   * | `PAYLOAD_TOO_LARGE`，HTTP 413 | 缩小正文或图片，按服务约定的大小、像素和资源限制重新提交。 |
   * | `SESSION_BUSY`、`SESSION_CONFLICT`，HTTP 409 | 等待在途请求结束，核对同一会话的身份和历史托管方后再调用。 |
   * | 限流、配额或下游短时不可用，HTTP 429 | 区分可恢复的限流与需要处理授权或配额的情况。适用重试时采用退避，有可用 Retry-After 时采用其秒数。 |
   * | `DOWNSTREAM_TIMEOUT`，HTTP 504，或流内错误、超时、断线 | 记录业务请求号和 POP 请求号。重试前核对原请求的执行情况，新尝试使用新的时间戳、nonce 和签名。 |
   * 失败 JSON 示例
   * ```json
   * {
   *   "error": {
   *     "code": "INVALID_REQUEST",
   *     "message": "请检查请求参数。",
   *     "requestId": "med-model-text-001"
   *   }
   * }
   * ```
   * 流开始后的错误示例
   * ```text
   * event:error
   * data:{"communication":{"requestId":"med-model-text-001"},"errorCode":"DOWNSTREAM_TIMEOUT","errorMsg":"downstream timeout"}
   * ```
   * 新请求生成新的时间戳、nonce 和签名。请求号用于关联，重复使用同一个值可能再次执行请求。
   * 
   * @param request - MedicalModelInferenceRequest
   * @param headers - MedicalModelInferenceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MedicalModelInferenceResponse
   */
  async *medicalModelInferenceWithSSE(request: $_model.MedicalModelInferenceRequest, headers: $_model.MedicalModelInferenceHeaders, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.MedicalModelInferenceResponse, any, unknown> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xDashScopeSSE)) {
      realHeaders["X-DashScope-SSE"] = String(headers.xDashScopeSSE);
    }

    if (!$dara.isNull(headers.xGWAccess)) {
      realHeaders["X-GW-Access"] = String(headers.xGWAccess);
    }

    if (!$dara.isNull(headers.xGWNonce)) {
      realHeaders["X-GW-Nonce"] = String(headers.xGWNonce);
    }

    if (!$dara.isNull(headers.xGWProtocol)) {
      realHeaders["X-GW-Protocol"] = String(headers.xGWProtocol);
    }

    if (!$dara.isNull(headers.xGWSignature)) {
      realHeaders["X-GW-Signature"] = String(headers.xGWSignature);
    }

    if (!$dara.isNull(headers.xGWTimestamp)) {
      realHeaders["X-GW-Timestamp"] = String(headers.xGWTimestamp);
    }

    if (!$dara.isNull(headers.xRequestId)) {
      realHeaders["X-Request-Id"] = String(headers.xRequestId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "MedicalModelInference",
      version: "2026-11-21",
      protocol: "HTTPS",
      pathname: `/v1/api/directModel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.MedicalModelInferenceResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.MedicalModelInferenceResponse({}));
      }

    }
  }

  /**
   * 指定医疗模型进行推理
   * 
   * @remarks
   * # 医疗模型推理接入说明
   * 医疗模型推理通过 UTF-8 JSON 接收文本和已开通的图片内容，提供一次完整 JSON 或 SSE 流式响应。
   * ## 1. 调用与鉴权
   * | 项目 | 写法 |
   * | --- | --- |
   * | 产品与版本 | `QwenB2BMed / 2026-11-21` |
   * | Action | `MedicalModelInference` |
   * | 方法和路径 | `POST /v1/api/directModel` |
   * | 域名 | 使用服务方提供的目标环境 POP Endpoint |
   * | RAM Action | `qwenb2bmed:MedicalModelInference` |
   * | 编码 | `Content-Type: application/octet-stream`，正文与签名使用同一份 UTF-8 字节 |
   * | 字段协议 | 小驼峰正文发送 `X-GW-Protocol: aliyun-roa` |
   * 阿里云 POP ACS3 使用阿里云 AK/SK 或 STS 凭据。业务 HMAC 使用服务方发放的业务 AK/SK。选择器和媒体能力须获得相应授权。
   * | 请求头 | 类型 | 必填 | 默认值 | 说明 |
   * | --- | --- | --- | --- | --- |
   * | `X-Request-Id` | string | 是 | — | 与正文 `communication.requestId` 一致。 |
   * | `X-GW-Protocol` | string | 使用本文格式时填写 | 兼容旧协议 | 固定 `aliyun-roa`。 |
   * | `X-GW-Access` | string | 是 | — | 业务 AK。 |
   * | `X-GW-Timestamp` | string | 是 | — | Unix 毫秒时间戳。 |
   * | `X-GW-Nonce` | string | 是 | — | 每次请求新生成的随机串。 |
   * | `X-GW-Signature` | string | 是 | — | 业务 HMAC-SHA256 的 64 位小写十六进制值。 |
   * | `Accept`（标准 HTTP 请求头） | string | 否 | — | 可填 application/json 或 text/event-stream。正文中仍须填写 params.responseStreaming。 |
   * | `X-DashScope-SSE` | string | 否 | 无 | 请求 SSE 时可填 enable，正文中仍须填写 params.responseStreaming。 |
   * 每个请求都必须在正文中传入 JSON 布尔值 `params.responseStreaming`。传 `false` 返回完整 JSON，传 `true` 返回 SSE。即使设置了 `Accept` 或 `X-DashScope-SSE`，也须填写此字段。
   * POP 签名器生成 `Authorization`、`x-acs-action`、`x-acs-version`、`x-acs-date`、`x-acs-signature-nonce` 和 `x-acs-content-sha256`。使用 STS 时按签名器要求传安全令牌。业务 SK 与 POP SK 各自在本地用于签名。
   * 业务签名的规范串依次为 METHOD、PATH、CANONICAL_QUERY、BODY_SHA256_HEX、TIMESTAMP、NONCE。各段用单个 LF 连接，末尾无额外 LF。无 query 时第三段留空。有 query 时使用实际请求的编码结果，按 `&` 拆分、去空项、对整项排序并重新用 `&` 连接。SHA-256 按实际发送的 UTF-8 正文字节计算。对规范串做 HMAC-SHA256，输出小写十六进制。使用本接口签名并发起请求的 Python 脚本见第 4 节末尾的「完整签名和调用示例」。
   * ## 2. 请求字段与会话
   * 将下表中的业务对象序列化为 UTF-8 JSON 字节，并用这份字节计算业务签名。使用 HTTP 客户端时，以 `Content-Type: application/octet-stream` 将同一份字节直接写入 POST 正文。使用阿里云通用 OpenAPI SDK 时，将这些字节的可读流设置到 `OpenApiRequest.stream`，填写第 1 节的业务请求头，并指定第 1 节的 Action、Version、ROA 路径和方法。
   * ```ts
   * interface MedicalRequest {
   *   // 会话关联和已授权的业务身份。
   *   communication: {
   *     requestId: string;
   *     sessionId: string;
   *     historyOwner: \\"CLIENT\\" | \\"GATEWAY\\";
   *     appId?: string;
   *     appScene?: string;
   *     userInfo?: { userId?: string; userIp?: string; userName?: string; deviceId?: string };
   *   };
   *   // 非空消息数组。最后一条是本轮 user。
   *   data: { messages: Array<{ role: \\"user\\" | \\"assistant\\"; content: string | ContentBlock[] }> };
   *   // 选择器和本次响应格式见下表。
   *   params: { modelName: \\"med_qwen4-vl-125\\"; responseStreaming: boolean; outputAudio?: boolean; [name: string]: unknown };
   * }
   * ```
   * | 字段 | 类型 | 必填 | 默认值 | 说明 | 示例 |
   * | --- | --- | --- | --- | --- | --- |
   * | `communication` | object | 是 | — | 本轮请求、会话及客户身份。 | — |
   * | `communication.requestId` | string | 是 | — | 1–128 位字母、数字、点、下划线、冒号或连字符。与请求头 `X-Request-Id` 完全一致，`gw-ingress-` 前缀为保留值。 | `"med-req-001"` |
   * | `communication.sessionId` | string | 是 | — | 1–512 位字母、数字、点、下划线、冒号或连字符。续聊复用。 | `"med-session-001"` |
   * | `communication.historyOwner` | string | 是 | — | `GATEWAY` 或 `CLIENT`。区分大小写，同一会话保持一致。 | `"CLIENT"` |
   * | `communication.appId` | string | 条件填写 | 凭据的固定应用 | 填写已授权的值。显式值为非空字符串，最多 256 个 UTF-16 代码单元，首尾无空白且不含控制字符。 | `"your-app-id"` |
   * | `communication.appScene` | string | 否 | — | 客户场景标记。 | — |
   * | `communication.userInfo` | object | 否 | — | 客户提供的业务用户信息。 | — |
   * | `communication.userInfo.userId` | string | 否 | 按用户身份规则判断 | 按已开通的用户绑定填写。显式值为非空字符串，最多 256 个 UTF-16 代码单元，首尾无空白且不含控制字符。 | `"user-001"` |
   * | `communication.userInfo.userIp` | string | 否 | — | 客户声明的用户 IP。 | — |
   * | `communication.userInfo.userName` | string | 否 | — | 客户侧用户名。 | — |
   * | `communication.userInfo.deviceId` | string | 否 | — | 客户侧设备标识，最多 256 个 UTF-16 代码单元。可省略；媒体请求实际填写时须非空白且不含控制字符。 | — |
   * | `data` | object | 是 | — | 本轮对话数据。 | — |
   * | `data.messages` | array | 是 | — | 非空。`GATEWAY` 仅传本轮一条 user。`CLIENT` 按 user、assistant 成对提供历史，最后追加本轮 user。 | — |
   * | `data.messages[].role` | string | 是 | — | `user` 或 `assistant`。 | `"user"` |
   * | `data.messages[].content` | string 或 array | 是 | — | 文本或第 3 节所列内容块。 | `"体检报告中的血红蛋白这一项是什么意思？"` |
   * | `params` | object | 是 | — | 模型选择和推理参数。 | — |
   * | `params.modelName` | string | 是 | — | 选择已开通的模型。值区分大小写，首尾无空白。当前版本为 `med_qwen4-vl-125`。 | `"med_qwen4-vl-125"` |
   * | `params.outputAudio` | boolean | 否 | 不主动请求 | 可选 JSON 布尔值。业务已开通 HTTP 音频输出时，true 请求合成音频，false 或省略时不主动请求。按当前响应格式读取 audioFrames 或 SSE 音频帧。 | — |
   * | `params.responseStreaming` | boolean | 是 | 无 | 必须显式填写 JSON 布尔值。`false` 返回完整 JSON，`true` 返回 SSE。 | `false` |
   * modelName 填服务方为客户开通的模型选择器，当前版本为 med_qwen4-vl-125。本入口使用 modelName 选择模型，`params.directAgent` 会导致请求失败。当前公开的 med_qwen4-vl-125 模型服务执行非思考推理，按该模型已开通的文本和图像能力调用。 扩展字段以已开通服务公布的参数为准。 `GATEWAY` 每轮提供一条本轮 user。 `CLIENT` 可携带按 user/assistant 配对的历史，最后附本轮 user。历史 assistant 只传文本。续聊保持 sessionId、historyOwner 和同一业务身份，新一轮可使用新的 requestId。
   * 正文顶层使用 `communication`、`data` 和 `params`，`data` 中使用 `messages`。消息对象包含 `role` 与 `content`，扩展业务参数放在 `params` 中。
   * ## 3. 文本和图片
   * ```ts
   * type ContentBlock =
   *   | { type: \\"text\\"; text: string }
   *   | { type: \\"image_url\\"; imageUrl: string | { url: string } };
   * ```
   * | 字段 | 类型 | 填写条件 | 默认值 | 说明 |
   * | --- | --- | --- | --- | --- |
   * | `content[].type` | string | 使用内容块时 | — | 文字填 `text`，图片填 `image_url`。 |
   * | `content[].text` | string | 文本块 | — | 要发送的文字。 |
   * | `content[].imageUrl` | string 或 object | 图片块 | — | 可访问的 HTTPS 图片地址或 Base64 Data URL。 |
   * | `content[].imageUrl.url` | string | 图片引用为对象时 | — | 对象只包含这个字段。 |
   * 图片块填写 type=image_url；imageUrl 可直接传字符串，也可传仅含 url 的对象。imageUrl.url 支持服务可访问的 HTTPS 图片 URL 或完整 Base64 Data URL，例如 data:image/png;base64, 后接 PNG 文件的标准 Base64，JPEG 使用 data:image/jpeg;base64, 前缀。前缀所声明的 MIME 应与图片内容一致。 申请开通的媒体格式、图片数量和大小以实际服务约定为准。媒体块内保留 `image_url` 枚举，字段名使用 `imageUrl`。
   * 本医疗 API 当前公开的输入范围是文本和图片，内容块使用 `text` 或 `image_url`。这里的 HTTP 音频输出能力不代表支持音频输入；不要据此发送文件、音频或视频内容块。
   * 图片引用可填非空字符串或仅含 `url` 的对象；图片块不传额外的 fileName，文本块只用 type 和 text。`userInfo.deviceId` 可省略，媒体请求实际填写时须非空白且不含控制字符。图片来源、数量、尺寸和大小仍须满足客户已开通的服务范围。
   * ## 4. 完整请求正文示例
   * 示例使用已固定业务应用的凭据。需要显式应用身份时补充获准的 `communication.appId`，发送时将 `X-Request-Id` 设置为正文请求号。
   * ### 4.1 纯文本
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-model-text-001",
   *     "sessionId": "med-model-text-001-session",
   *     "historyOwner": "GATEWAY"
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": "请解释报告中参考区间的含义。"
   *       }
   *     ]
   *   },
   *   "params": {
   *     "responseStreaming": false,
   *     "modelName": "med_qwen4-vl-125"
   *   }
   * }
   * ```
   * ### 4.2 HTTPS 图片
   * 将示例地址替换为服务可访问的真实图片地址。
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-model-url-001",
   *     "sessionId": "med-model-url-001-session",
   *     "historyOwner": "GATEWAY"
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": [
   *           {
   *             "type": "text",
   *             "text": "请描述图片中可见的内容。"
   *           },
   *           {
   *             "type": "image_url",
   *             "imageUrl": {
   *               "url": "https://example.com/medical-image.png"
   *             }
   *           }
   *         ]
   *       }
   *     ]
   *   },
   *   "params": {
   *     "responseStreaming": false,
   *     "modelName": "med_qwen4-vl-125"
   *   }
   * }
   * ```
   * ### 4.3 Base64 图片
   * 下方使用一张合成 PNG 演示字段位置。实际请求使用自己的完整编码。
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-model-base64-001",
   *     "sessionId": "med-model-base64-001-session",
   *     "historyOwner": "GATEWAY"
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": [
   *           {
   *             "type": "text",
   *             "text": "请描述图片中可见的内容。"
   *           },
   *           {
   *             "type": "image_url",
   *             "imageUrl": {
   *               "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAb0lEQVR4nO3PAQkAAAyEwO9feoshgnABdLep8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3IPanc8OLDQitxAAAAAElFTkSuQmCC"
   *             }
   *           }
   *         ]
   *       }
   *     ]
   *   },
   *   "params": {
   *     "responseStreaming": false,
   *     "modelName": "med_qwen4-vl-125"
   *   }
   * }
   * ```
   * 需要 SSE 时，在以上请求中使用 `"responseStreaming": true`，并可使用 `Accept: text/event-stream`。获取完整 JSON 时，显式传入 `false`。
   * #### 完整签名和调用示例
   * 示例从环境变量读取 POP_HOST、两套凭据和可选的 APP_ID、BUSINESS_USER_ID、SESSION_ID。POP_HOST 只填服务方提供的域名，不填协议和路径。脚本发送一条文本请求。设置 STREAM=true 可读取 SSE。
   * ```python
   * import datetime, hashlib, hmac, http.client, json, os, secrets, time
   * def sha(data):
   *     return hashlib.sha256(data).hexdigest()
   * def mac(secret, value):
   *     return hmac.new(secret.encode("utf-8"), value.encode("utf-8"), hashlib.sha256).hexdigest()
   * host = os.environ["POP_HOST"]
   * path = "/v1/api/directModel"
   * request_id = "chat-" + secrets.token_hex(12)
   * stream = os.environ.get("STREAM", "false").lower() == "true"
   * communication = {
   *     "requestId": request_id,
   *     "sessionId": os.environ.get("SESSION_ID", "session-" + secrets.token_hex(12)),
   *     "historyOwner": "GATEWAY",
   * }
   * if os.environ.get("APP_ID"):
   *     communication["appId"] = os.environ["APP_ID"]
   * if os.environ.get("BUSINESS_USER_ID"):
   *     communication["userInfo"] = {"userId": os.environ["BUSINESS_USER_ID"]}
   * body = {
   *     "communication": communication,
   *     "data": {"messages": [{"role": "user", "content": "请解释报告中参考区间的含义。"}]},
   *     "params": {"modelName": "med_qwen4-vl-125", "responseStreaming": stream},
   * }
   * payload = json.dumps(body, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
   * payload_hash = sha(payload)
   * timestamp, nonce = str(time.time_ns() // 1_000_000), secrets.token_hex(16)
   * gateway_string = "\\n".join(("POST", path, "", payload_hash, timestamp, nonce))
   * headers = {
   *     "host": host,
   *     "content-type": "application/octet-stream",
   *     "accept": "text/event-stream" if stream else "application/json",
   *     "x-acs-action": "MedicalModelInference",
   *     "x-acs-version": "2026-11-21",
   *     "x-acs-date": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
   *     "x-acs-signature-nonce": secrets.token_hex(16),
   *     "x-acs-content-sha256": payload_hash,
   *     "x-gw-protocol": "aliyun-roa",
   *     "x-request-id": request_id,
   *     "x-gw-access": os.environ["GW_ACCESS_KEY_ID"],
   *     "x-gw-timestamp": timestamp,
   *     "x-gw-nonce": nonce,
   *     "x-gw-signature": mac(os.environ["GW_ACCESS_KEY_SECRET"], gateway_string),
   * }
   * if os.environ.get("POP_SECURITY_TOKEN"):
   *     headers["x-acs-security-token"] = os.environ["POP_SECURITY_TOKEN"]
   * signed_names = sorted(k for k in headers if k in ("host", "content-type") or k.startswith("x-acs-"))
   * canonical_headers = "".join(k + ":" + headers[k].strip() + "\\n" for k in signed_names)
   * signed_headers = ";".join(signed_names)
   * canonical_request = "\\n".join(("POST", path, "", canonical_headers, signed_headers, payload_hash))
   * pop_signature = mac(os.environ["POP_ACCESS_KEY_SECRET"], "ACS3-HMAC-SHA256\\n" + sha(canonical_request.encode("utf-8")))
   * headers["authorization"] = (
   *     "ACS3-HMAC-SHA256 Credential=" + os.environ["POP_ACCESS_KEY_ID"]
   *     + ",SignedHeaders=" + signed_headers + ",Signature=" + pop_signature
   * )
   * connection = http.client.HTTPSConnection(host, timeout=120)
   * try:
   *     connection.request("POST", path, body=payload, headers=headers)
   *     response = connection.getresponse()
   *     print("HTTP", response.status, "业务 RequestId:", request_id,
   *           "POP RequestId:", response.getheader("x-acs-request-id"))
   *     if "text/event-stream" in (response.getheader("content-type") or "").lower():
   *         # 打印保留 SSE 空行；业务集成应按空行组装事件并检查 complete/error。
   *         while True:
   *             line = response.readline()
   *             if not line:
   *                 break
   *             print(line.decode("utf-8"), end="")
   *     else:
   *         print(response.read().decode("utf-8"))
   * finally:
   *     connection.close()
   * ```
   * ## 5. 响应
   * ```ts
   * interface MedicalResponse {
   *   requestId?: string;
   *   communication?: { requestId?: string; sessionId?: string; responseId?: number };
   *   data?: {
   *     messages?: Array<{
   *       mimeType?: string;
   *       status?: string;
   *       content?: unknown;
   *       metaData?: {
   *         sourceSeq?: string; type?: string; barTitle?: string; content?: unknown;
   *         multiLoad?: Array<{ type?: string; sourceSeq?: string; content?: unknown }>;
   *       };
   *     }>;
   *     // 可选业务调试信息，可为 null；内容以实际返回为准。
   *     debug?: unknown;
   *     extraInfo?: { inputResources?: Array<{
   *       contentIndex?: number; type?: string; resourceId?: string; url?: string; fileName?: string;
   *     }> };
   *   };
   *   audioFrames?: Array<{
   *     type?: string; data?: string; last?: boolean; code?: string; message?: string; requestId?: string;
   *   }>;
   *   errorCode?: string | number;
   *   errorMsg?: string;
   *   error?: { code?: string | number; message?: string; requestId?: string };
   * }
   * ```
   * | 字段 | 类型 | 是否总有 | 默认值 | 说明 |
   * | --- | --- | --- | --- | --- |
   * | `requestId` | string | 否 | — | 业务关联号。POP 请求号见 x-acs-request-id。 |
   * | `communication` | object | 否 | — | 客户请求、会话与业务响应帧的关联信息。 |
   * | `communication.requestId/sessionId` | string | 否 | — | 与该业务请求及会话关联。 |
   * | `communication.responseId` | integer | 否 | — | 业务响应帧标识。完整 JSON 聚合时可为 0，SSE 按接收顺序处理，编号无需连续。 |
   * | `data.messages` | array | 否 | — | 正文、过程或卡片消息，依据 mimeType 解析。 |
   * | `data.messages[].mimeType` | string | 否 | — | 消息内容或过程类型。 |
   * | `data.messages[].status` | string | 否 | — | 该条消息状态。 |
   * | `data.messages[].content` | JSON | 否 | — | 当前消息正文或结构化内容。 |
   * | `data.messages[].metaData` | object | 否 | — | 可选的消息附加信息；当前模型不承诺返回医疗 Agent 的检索进度、来源列表或业务卡片。 |
   * | `metaData.sourceSeq/type/barTitle/content` | string 或 JSON | 否 | — | 存在时按实际返回的标识、类型、标题和内容解释；不是本模型接口的固定必返字段。 |
   * | `metaData.multiLoad` | array | 否 | — | 为兼容已有响应形状保留的可选列表，可为空或省略；当前模型不保证生成 Agent 业务卡片。 |
   * | `data.debug` | 任意 JSON（含 null） | 否 | — | 可选业务调试信息。是否返回、出现时机和内容按实际执行结果；不保证每轮或结束事件必有，也不用于判断业务完成。 |
   * | `data.extraInfo.inputResources` | array | 否 | — | 有结果时提供输入资源处理信息。各项可含 contentIndex、type、resourceId、url 和 fileName。 |
   * | `audioFrames` | array | 否 | — | 已开通对应输出时可能返回音频帧。各项可含 type、Base64 数据 data、末帧 last 或错误 code、message、requestId。 |
   * | `errorCode` | string 或 number | 否 | — | 0 表示业务成功。非 0 时读取 errorMsg 或 error，SSE 同时处理 error 事件。 |
   * | `errorMsg` | string | 否 | — | 服务返回的状态描述。 |
   * | `error` | object | 否 | — | 结构化业务错误，按 code 判断。 |
   * 当前医疗模型推理主要返回模型回答正文，按 `mimeType=multi_load/iframe` 读取 `content`；SSE 中正文可以累计快照更新，完整 JSON 返回聚合后的正文。不要由可选 `metaData` 字段推断本接口提供医疗 Agent 的检索过程、资料来源或业务卡片。
   * 一次完整 JSON 的成功示例
   * `debug: null` 仅演示此可选字段的空值形状，不表示每次都会返回。客户端不应据此推定固定的调试子字段。
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-model-text-001",
   *     "responseId": 0
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "mimeType": "multi_load/iframe",
   *         "status": "complete",
   *         "content": "请结合报告上的参考区间理解各项指标。",
   *         "metaData": {
   *           "multiLoad": []
   *         }
   *       }
   *     ],
   *     "debug": null
   *   },
   *   "errorCode": 0,
   *   "errorMsg": "success"
   * }
   * ```
   * SSE 示例
   * ```text
   * data:{"communication":{"requestId":"med-model-text-001","responseId":0},"data":{"messages":[{"mimeType":"multi_load/iframe","status":"processing","content":"请结合报告上的参考区间。","metaData":{"multiLoad":[]}}]},"errorCode":0,"errorMsg":"success"}
   * event:complete
   * data:{"communication":{"requestId":"med-model-text-001","responseId":1},"data":{"messages":[{"mimeType":"multi_load/iframe","status":"complete","content":"请结合报告上的参考区间理解各项指标。","metaData":{"multiLoad":[]}}]},"errorCode":0,"errorMsg":"success"}
   * ```
   * SSE 按空行分隔事件。complete 可能携带最终正文，也可能携带空对象，先处理其中已有的业务数据再结束。正文累计快照按更新替换，不把快照重复拼接。流内收到 error、断开且缺少正常终帧、或收到业务错误时按失败处理。HTTP 请求号与业务请求号分别记录，便于联调排查。
   * ## 6. 错误与重试
   * 先检查 HTTP 状态。HTTP 200 时继续检查业务 errorCode 或结构化 error，SSE 还要读取流内事件至 complete 或 error。流开始后的错误可在 HTTP 200 的连接中通过 event:error 返回。
   * | 状况 | 处理 |
   * | --- | --- |
   * | `INVALID_REQUEST`、`IMAGE_PROCESSING_ERROR`，HTTP 400 | 核对字段类型、会话、图片编码和媒体授权，修正请求。 |
   * | POP 鉴权错误，或 `AUTH_INVALID_KEY`、`AUTH_INVALID_SIGNATURE`、`AUTH_TIMESTAMP_EXPIRED`、`AUTH_NONCE_REPLAY`，业务网关 HTTP 401 | 按对应认证层核对凭据、正文哈希、时间戳与 nonce。签名已过期或 nonce 已使用时，为新尝试重新签名。 |
   * | `DIRECT_AGENT_FORBIDDEN`、`AUTH_APP_FORBIDDEN`、`AUTH_URI_FORBIDDEN`，HTTP 403 | 核对应用身份、接口权限及已开通的模型或 Agent。 |
   * | `SESSION_ACCESS_DENIED`，HTTP 403 | 核对会话与当前业务身份的归属，保持续聊身份一致，不使用其他用户的会话。 |
   * | `ADMISSION_SERVICE_SUSPENDED`、`PLATFORM_ACCESS_DISABLED`、`AUTH_DISABLED`，HTTP 403 | 当前服务、接口或凭据不可用，联系服务方确认恢复或授权，勿持续重试。 |
   * | `PAYLOAD_TOO_LARGE`，HTTP 413 | 缩小正文或图片，按服务约定的大小、像素和资源限制重新提交。 |
   * | `SESSION_BUSY`、`SESSION_CONFLICT`，HTTP 409 | 等待在途请求结束，核对同一会话的身份和历史托管方后再调用。 |
   * | 限流、配额或下游短时不可用，HTTP 429 | 区分可恢复的限流与需要处理授权或配额的情况。适用重试时采用退避，有可用 Retry-After 时采用其秒数。 |
   * | `DOWNSTREAM_TIMEOUT`，HTTP 504，或流内错误、超时、断线 | 记录业务请求号和 POP 请求号。重试前核对原请求的执行情况，新尝试使用新的时间戳、nonce 和签名。 |
   * 失败 JSON 示例
   * ```json
   * {
   *   "error": {
   *     "code": "INVALID_REQUEST",
   *     "message": "请检查请求参数。",
   *     "requestId": "med-model-text-001"
   *   }
   * }
   * ```
   * 流开始后的错误示例
   * ```text
   * event:error
   * data:{"communication":{"requestId":"med-model-text-001"},"errorCode":"DOWNSTREAM_TIMEOUT","errorMsg":"downstream timeout"}
   * ```
   * 新请求生成新的时间戳、nonce 和签名。请求号用于关联，重复使用同一个值可能再次执行请求。
   * 
   * @param request - MedicalModelInferenceRequest
   * @param headers - MedicalModelInferenceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MedicalModelInferenceResponse
   */
  async medicalModelInferenceWithOptions(request: $_model.MedicalModelInferenceRequest, headers: $_model.MedicalModelInferenceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.MedicalModelInferenceResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xDashScopeSSE)) {
      realHeaders["X-DashScope-SSE"] = String(headers.xDashScopeSSE);
    }

    if (!$dara.isNull(headers.xGWAccess)) {
      realHeaders["X-GW-Access"] = String(headers.xGWAccess);
    }

    if (!$dara.isNull(headers.xGWNonce)) {
      realHeaders["X-GW-Nonce"] = String(headers.xGWNonce);
    }

    if (!$dara.isNull(headers.xGWProtocol)) {
      realHeaders["X-GW-Protocol"] = String(headers.xGWProtocol);
    }

    if (!$dara.isNull(headers.xGWSignature)) {
      realHeaders["X-GW-Signature"] = String(headers.xGWSignature);
    }

    if (!$dara.isNull(headers.xGWTimestamp)) {
      realHeaders["X-GW-Timestamp"] = String(headers.xGWTimestamp);
    }

    if (!$dara.isNull(headers.xRequestId)) {
      realHeaders["X-Request-Id"] = String(headers.xRequestId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "MedicalModelInference",
      version: "2026-11-21",
      protocol: "HTTPS",
      pathname: `/v1/api/directModel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MedicalModelInferenceResponse>(await this.callApi(params, req, runtime), new $_model.MedicalModelInferenceResponse({}));
  }

  /**
   * 指定医疗模型进行推理
   * 
   * @remarks
   * # 医疗模型推理接入说明
   * 医疗模型推理通过 UTF-8 JSON 接收文本和已开通的图片内容，提供一次完整 JSON 或 SSE 流式响应。
   * ## 1. 调用与鉴权
   * | 项目 | 写法 |
   * | --- | --- |
   * | 产品与版本 | `QwenB2BMed / 2026-11-21` |
   * | Action | `MedicalModelInference` |
   * | 方法和路径 | `POST /v1/api/directModel` |
   * | 域名 | 使用服务方提供的目标环境 POP Endpoint |
   * | RAM Action | `qwenb2bmed:MedicalModelInference` |
   * | 编码 | `Content-Type: application/octet-stream`，正文与签名使用同一份 UTF-8 字节 |
   * | 字段协议 | 小驼峰正文发送 `X-GW-Protocol: aliyun-roa` |
   * 阿里云 POP ACS3 使用阿里云 AK/SK 或 STS 凭据。业务 HMAC 使用服务方发放的业务 AK/SK。选择器和媒体能力须获得相应授权。
   * | 请求头 | 类型 | 必填 | 默认值 | 说明 |
   * | --- | --- | --- | --- | --- |
   * | `X-Request-Id` | string | 是 | — | 与正文 `communication.requestId` 一致。 |
   * | `X-GW-Protocol` | string | 使用本文格式时填写 | 兼容旧协议 | 固定 `aliyun-roa`。 |
   * | `X-GW-Access` | string | 是 | — | 业务 AK。 |
   * | `X-GW-Timestamp` | string | 是 | — | Unix 毫秒时间戳。 |
   * | `X-GW-Nonce` | string | 是 | — | 每次请求新生成的随机串。 |
   * | `X-GW-Signature` | string | 是 | — | 业务 HMAC-SHA256 的 64 位小写十六进制值。 |
   * | `Accept`（标准 HTTP 请求头） | string | 否 | — | 可填 application/json 或 text/event-stream。正文中仍须填写 params.responseStreaming。 |
   * | `X-DashScope-SSE` | string | 否 | 无 | 请求 SSE 时可填 enable，正文中仍须填写 params.responseStreaming。 |
   * 每个请求都必须在正文中传入 JSON 布尔值 `params.responseStreaming`。传 `false` 返回完整 JSON，传 `true` 返回 SSE。即使设置了 `Accept` 或 `X-DashScope-SSE`，也须填写此字段。
   * POP 签名器生成 `Authorization`、`x-acs-action`、`x-acs-version`、`x-acs-date`、`x-acs-signature-nonce` 和 `x-acs-content-sha256`。使用 STS 时按签名器要求传安全令牌。业务 SK 与 POP SK 各自在本地用于签名。
   * 业务签名的规范串依次为 METHOD、PATH、CANONICAL_QUERY、BODY_SHA256_HEX、TIMESTAMP、NONCE。各段用单个 LF 连接，末尾无额外 LF。无 query 时第三段留空。有 query 时使用实际请求的编码结果，按 `&` 拆分、去空项、对整项排序并重新用 `&` 连接。SHA-256 按实际发送的 UTF-8 正文字节计算。对规范串做 HMAC-SHA256，输出小写十六进制。使用本接口签名并发起请求的 Python 脚本见第 4 节末尾的「完整签名和调用示例」。
   * ## 2. 请求字段与会话
   * 将下表中的业务对象序列化为 UTF-8 JSON 字节，并用这份字节计算业务签名。使用 HTTP 客户端时，以 `Content-Type: application/octet-stream` 将同一份字节直接写入 POST 正文。使用阿里云通用 OpenAPI SDK 时，将这些字节的可读流设置到 `OpenApiRequest.stream`，填写第 1 节的业务请求头，并指定第 1 节的 Action、Version、ROA 路径和方法。
   * ```ts
   * interface MedicalRequest {
   *   // 会话关联和已授权的业务身份。
   *   communication: {
   *     requestId: string;
   *     sessionId: string;
   *     historyOwner: \\"CLIENT\\" | \\"GATEWAY\\";
   *     appId?: string;
   *     appScene?: string;
   *     userInfo?: { userId?: string; userIp?: string; userName?: string; deviceId?: string };
   *   };
   *   // 非空消息数组。最后一条是本轮 user。
   *   data: { messages: Array<{ role: \\"user\\" | \\"assistant\\"; content: string | ContentBlock[] }> };
   *   // 选择器和本次响应格式见下表。
   *   params: { modelName: \\"med_qwen4-vl-125\\"; responseStreaming: boolean; outputAudio?: boolean; [name: string]: unknown };
   * }
   * ```
   * | 字段 | 类型 | 必填 | 默认值 | 说明 | 示例 |
   * | --- | --- | --- | --- | --- | --- |
   * | `communication` | object | 是 | — | 本轮请求、会话及客户身份。 | — |
   * | `communication.requestId` | string | 是 | — | 1–128 位字母、数字、点、下划线、冒号或连字符。与请求头 `X-Request-Id` 完全一致，`gw-ingress-` 前缀为保留值。 | `"med-req-001"` |
   * | `communication.sessionId` | string | 是 | — | 1–512 位字母、数字、点、下划线、冒号或连字符。续聊复用。 | `"med-session-001"` |
   * | `communication.historyOwner` | string | 是 | — | `GATEWAY` 或 `CLIENT`。区分大小写，同一会话保持一致。 | `"CLIENT"` |
   * | `communication.appId` | string | 条件填写 | 凭据的固定应用 | 填写已授权的值。显式值为非空字符串，最多 256 个 UTF-16 代码单元，首尾无空白且不含控制字符。 | `"your-app-id"` |
   * | `communication.appScene` | string | 否 | — | 客户场景标记。 | — |
   * | `communication.userInfo` | object | 否 | — | 客户提供的业务用户信息。 | — |
   * | `communication.userInfo.userId` | string | 否 | 按用户身份规则判断 | 按已开通的用户绑定填写。显式值为非空字符串，最多 256 个 UTF-16 代码单元，首尾无空白且不含控制字符。 | `"user-001"` |
   * | `communication.userInfo.userIp` | string | 否 | — | 客户声明的用户 IP。 | — |
   * | `communication.userInfo.userName` | string | 否 | — | 客户侧用户名。 | — |
   * | `communication.userInfo.deviceId` | string | 否 | — | 客户侧设备标识，最多 256 个 UTF-16 代码单元。可省略；媒体请求实际填写时须非空白且不含控制字符。 | — |
   * | `data` | object | 是 | — | 本轮对话数据。 | — |
   * | `data.messages` | array | 是 | — | 非空。`GATEWAY` 仅传本轮一条 user。`CLIENT` 按 user、assistant 成对提供历史，最后追加本轮 user。 | — |
   * | `data.messages[].role` | string | 是 | — | `user` 或 `assistant`。 | `"user"` |
   * | `data.messages[].content` | string 或 array | 是 | — | 文本或第 3 节所列内容块。 | `"体检报告中的血红蛋白这一项是什么意思？"` |
   * | `params` | object | 是 | — | 模型选择和推理参数。 | — |
   * | `params.modelName` | string | 是 | — | 选择已开通的模型。值区分大小写，首尾无空白。当前版本为 `med_qwen4-vl-125`。 | `"med_qwen4-vl-125"` |
   * | `params.outputAudio` | boolean | 否 | 不主动请求 | 可选 JSON 布尔值。业务已开通 HTTP 音频输出时，true 请求合成音频，false 或省略时不主动请求。按当前响应格式读取 audioFrames 或 SSE 音频帧。 | — |
   * | `params.responseStreaming` | boolean | 是 | 无 | 必须显式填写 JSON 布尔值。`false` 返回完整 JSON，`true` 返回 SSE。 | `false` |
   * modelName 填服务方为客户开通的模型选择器，当前版本为 med_qwen4-vl-125。本入口使用 modelName 选择模型，`params.directAgent` 会导致请求失败。当前公开的 med_qwen4-vl-125 模型服务执行非思考推理，按该模型已开通的文本和图像能力调用。 扩展字段以已开通服务公布的参数为准。 `GATEWAY` 每轮提供一条本轮 user。 `CLIENT` 可携带按 user/assistant 配对的历史，最后附本轮 user。历史 assistant 只传文本。续聊保持 sessionId、historyOwner 和同一业务身份，新一轮可使用新的 requestId。
   * 正文顶层使用 `communication`、`data` 和 `params`，`data` 中使用 `messages`。消息对象包含 `role` 与 `content`，扩展业务参数放在 `params` 中。
   * ## 3. 文本和图片
   * ```ts
   * type ContentBlock =
   *   | { type: \\"text\\"; text: string }
   *   | { type: \\"image_url\\"; imageUrl: string | { url: string } };
   * ```
   * | 字段 | 类型 | 填写条件 | 默认值 | 说明 |
   * | --- | --- | --- | --- | --- |
   * | `content[].type` | string | 使用内容块时 | — | 文字填 `text`，图片填 `image_url`。 |
   * | `content[].text` | string | 文本块 | — | 要发送的文字。 |
   * | `content[].imageUrl` | string 或 object | 图片块 | — | 可访问的 HTTPS 图片地址或 Base64 Data URL。 |
   * | `content[].imageUrl.url` | string | 图片引用为对象时 | — | 对象只包含这个字段。 |
   * 图片块填写 type=image_url；imageUrl 可直接传字符串，也可传仅含 url 的对象。imageUrl.url 支持服务可访问的 HTTPS 图片 URL 或完整 Base64 Data URL，例如 data:image/png;base64, 后接 PNG 文件的标准 Base64，JPEG 使用 data:image/jpeg;base64, 前缀。前缀所声明的 MIME 应与图片内容一致。 申请开通的媒体格式、图片数量和大小以实际服务约定为准。媒体块内保留 `image_url` 枚举，字段名使用 `imageUrl`。
   * 本医疗 API 当前公开的输入范围是文本和图片，内容块使用 `text` 或 `image_url`。这里的 HTTP 音频输出能力不代表支持音频输入；不要据此发送文件、音频或视频内容块。
   * 图片引用可填非空字符串或仅含 `url` 的对象；图片块不传额外的 fileName，文本块只用 type 和 text。`userInfo.deviceId` 可省略，媒体请求实际填写时须非空白且不含控制字符。图片来源、数量、尺寸和大小仍须满足客户已开通的服务范围。
   * ## 4. 完整请求正文示例
   * 示例使用已固定业务应用的凭据。需要显式应用身份时补充获准的 `communication.appId`，发送时将 `X-Request-Id` 设置为正文请求号。
   * ### 4.1 纯文本
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-model-text-001",
   *     "sessionId": "med-model-text-001-session",
   *     "historyOwner": "GATEWAY"
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": "请解释报告中参考区间的含义。"
   *       }
   *     ]
   *   },
   *   "params": {
   *     "responseStreaming": false,
   *     "modelName": "med_qwen4-vl-125"
   *   }
   * }
   * ```
   * ### 4.2 HTTPS 图片
   * 将示例地址替换为服务可访问的真实图片地址。
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-model-url-001",
   *     "sessionId": "med-model-url-001-session",
   *     "historyOwner": "GATEWAY"
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": [
   *           {
   *             "type": "text",
   *             "text": "请描述图片中可见的内容。"
   *           },
   *           {
   *             "type": "image_url",
   *             "imageUrl": {
   *               "url": "https://example.com/medical-image.png"
   *             }
   *           }
   *         ]
   *       }
   *     ]
   *   },
   *   "params": {
   *     "responseStreaming": false,
   *     "modelName": "med_qwen4-vl-125"
   *   }
   * }
   * ```
   * ### 4.3 Base64 图片
   * 下方使用一张合成 PNG 演示字段位置。实际请求使用自己的完整编码。
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-model-base64-001",
   *     "sessionId": "med-model-base64-001-session",
   *     "historyOwner": "GATEWAY"
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": [
   *           {
   *             "type": "text",
   *             "text": "请描述图片中可见的内容。"
   *           },
   *           {
   *             "type": "image_url",
   *             "imageUrl": {
   *               "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAb0lEQVR4nO3PAQkAAAyEwO9feoshgnABdLep8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3I8QUNyPEFDcjxBQ3IPanc8OLDQitxAAAAAElFTkSuQmCC"
   *             }
   *           }
   *         ]
   *       }
   *     ]
   *   },
   *   "params": {
   *     "responseStreaming": false,
   *     "modelName": "med_qwen4-vl-125"
   *   }
   * }
   * ```
   * 需要 SSE 时，在以上请求中使用 `"responseStreaming": true`，并可使用 `Accept: text/event-stream`。获取完整 JSON 时，显式传入 `false`。
   * #### 完整签名和调用示例
   * 示例从环境变量读取 POP_HOST、两套凭据和可选的 APP_ID、BUSINESS_USER_ID、SESSION_ID。POP_HOST 只填服务方提供的域名，不填协议和路径。脚本发送一条文本请求。设置 STREAM=true 可读取 SSE。
   * ```python
   * import datetime, hashlib, hmac, http.client, json, os, secrets, time
   * def sha(data):
   *     return hashlib.sha256(data).hexdigest()
   * def mac(secret, value):
   *     return hmac.new(secret.encode("utf-8"), value.encode("utf-8"), hashlib.sha256).hexdigest()
   * host = os.environ["POP_HOST"]
   * path = "/v1/api/directModel"
   * request_id = "chat-" + secrets.token_hex(12)
   * stream = os.environ.get("STREAM", "false").lower() == "true"
   * communication = {
   *     "requestId": request_id,
   *     "sessionId": os.environ.get("SESSION_ID", "session-" + secrets.token_hex(12)),
   *     "historyOwner": "GATEWAY",
   * }
   * if os.environ.get("APP_ID"):
   *     communication["appId"] = os.environ["APP_ID"]
   * if os.environ.get("BUSINESS_USER_ID"):
   *     communication["userInfo"] = {"userId": os.environ["BUSINESS_USER_ID"]}
   * body = {
   *     "communication": communication,
   *     "data": {"messages": [{"role": "user", "content": "请解释报告中参考区间的含义。"}]},
   *     "params": {"modelName": "med_qwen4-vl-125", "responseStreaming": stream},
   * }
   * payload = json.dumps(body, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
   * payload_hash = sha(payload)
   * timestamp, nonce = str(time.time_ns() // 1_000_000), secrets.token_hex(16)
   * gateway_string = "\\n".join(("POST", path, "", payload_hash, timestamp, nonce))
   * headers = {
   *     "host": host,
   *     "content-type": "application/octet-stream",
   *     "accept": "text/event-stream" if stream else "application/json",
   *     "x-acs-action": "MedicalModelInference",
   *     "x-acs-version": "2026-11-21",
   *     "x-acs-date": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
   *     "x-acs-signature-nonce": secrets.token_hex(16),
   *     "x-acs-content-sha256": payload_hash,
   *     "x-gw-protocol": "aliyun-roa",
   *     "x-request-id": request_id,
   *     "x-gw-access": os.environ["GW_ACCESS_KEY_ID"],
   *     "x-gw-timestamp": timestamp,
   *     "x-gw-nonce": nonce,
   *     "x-gw-signature": mac(os.environ["GW_ACCESS_KEY_SECRET"], gateway_string),
   * }
   * if os.environ.get("POP_SECURITY_TOKEN"):
   *     headers["x-acs-security-token"] = os.environ["POP_SECURITY_TOKEN"]
   * signed_names = sorted(k for k in headers if k in ("host", "content-type") or k.startswith("x-acs-"))
   * canonical_headers = "".join(k + ":" + headers[k].strip() + "\\n" for k in signed_names)
   * signed_headers = ";".join(signed_names)
   * canonical_request = "\\n".join(("POST", path, "", canonical_headers, signed_headers, payload_hash))
   * pop_signature = mac(os.environ["POP_ACCESS_KEY_SECRET"], "ACS3-HMAC-SHA256\\n" + sha(canonical_request.encode("utf-8")))
   * headers["authorization"] = (
   *     "ACS3-HMAC-SHA256 Credential=" + os.environ["POP_ACCESS_KEY_ID"]
   *     + ",SignedHeaders=" + signed_headers + ",Signature=" + pop_signature
   * )
   * connection = http.client.HTTPSConnection(host, timeout=120)
   * try:
   *     connection.request("POST", path, body=payload, headers=headers)
   *     response = connection.getresponse()
   *     print("HTTP", response.status, "业务 RequestId:", request_id,
   *           "POP RequestId:", response.getheader("x-acs-request-id"))
   *     if "text/event-stream" in (response.getheader("content-type") or "").lower():
   *         # 打印保留 SSE 空行；业务集成应按空行组装事件并检查 complete/error。
   *         while True:
   *             line = response.readline()
   *             if not line:
   *                 break
   *             print(line.decode("utf-8"), end="")
   *     else:
   *         print(response.read().decode("utf-8"))
   * finally:
   *     connection.close()
   * ```
   * ## 5. 响应
   * ```ts
   * interface MedicalResponse {
   *   requestId?: string;
   *   communication?: { requestId?: string; sessionId?: string; responseId?: number };
   *   data?: {
   *     messages?: Array<{
   *       mimeType?: string;
   *       status?: string;
   *       content?: unknown;
   *       metaData?: {
   *         sourceSeq?: string; type?: string; barTitle?: string; content?: unknown;
   *         multiLoad?: Array<{ type?: string; sourceSeq?: string; content?: unknown }>;
   *       };
   *     }>;
   *     // 可选业务调试信息，可为 null；内容以实际返回为准。
   *     debug?: unknown;
   *     extraInfo?: { inputResources?: Array<{
   *       contentIndex?: number; type?: string; resourceId?: string; url?: string; fileName?: string;
   *     }> };
   *   };
   *   audioFrames?: Array<{
   *     type?: string; data?: string; last?: boolean; code?: string; message?: string; requestId?: string;
   *   }>;
   *   errorCode?: string | number;
   *   errorMsg?: string;
   *   error?: { code?: string | number; message?: string; requestId?: string };
   * }
   * ```
   * | 字段 | 类型 | 是否总有 | 默认值 | 说明 |
   * | --- | --- | --- | --- | --- |
   * | `requestId` | string | 否 | — | 业务关联号。POP 请求号见 x-acs-request-id。 |
   * | `communication` | object | 否 | — | 客户请求、会话与业务响应帧的关联信息。 |
   * | `communication.requestId/sessionId` | string | 否 | — | 与该业务请求及会话关联。 |
   * | `communication.responseId` | integer | 否 | — | 业务响应帧标识。完整 JSON 聚合时可为 0，SSE 按接收顺序处理，编号无需连续。 |
   * | `data.messages` | array | 否 | — | 正文、过程或卡片消息，依据 mimeType 解析。 |
   * | `data.messages[].mimeType` | string | 否 | — | 消息内容或过程类型。 |
   * | `data.messages[].status` | string | 否 | — | 该条消息状态。 |
   * | `data.messages[].content` | JSON | 否 | — | 当前消息正文或结构化内容。 |
   * | `data.messages[].metaData` | object | 否 | — | 可选的消息附加信息；当前模型不承诺返回医疗 Agent 的检索进度、来源列表或业务卡片。 |
   * | `metaData.sourceSeq/type/barTitle/content` | string 或 JSON | 否 | — | 存在时按实际返回的标识、类型、标题和内容解释；不是本模型接口的固定必返字段。 |
   * | `metaData.multiLoad` | array | 否 | — | 为兼容已有响应形状保留的可选列表，可为空或省略；当前模型不保证生成 Agent 业务卡片。 |
   * | `data.debug` | 任意 JSON（含 null） | 否 | — | 可选业务调试信息。是否返回、出现时机和内容按实际执行结果；不保证每轮或结束事件必有，也不用于判断业务完成。 |
   * | `data.extraInfo.inputResources` | array | 否 | — | 有结果时提供输入资源处理信息。各项可含 contentIndex、type、resourceId、url 和 fileName。 |
   * | `audioFrames` | array | 否 | — | 已开通对应输出时可能返回音频帧。各项可含 type、Base64 数据 data、末帧 last 或错误 code、message、requestId。 |
   * | `errorCode` | string 或 number | 否 | — | 0 表示业务成功。非 0 时读取 errorMsg 或 error，SSE 同时处理 error 事件。 |
   * | `errorMsg` | string | 否 | — | 服务返回的状态描述。 |
   * | `error` | object | 否 | — | 结构化业务错误，按 code 判断。 |
   * 当前医疗模型推理主要返回模型回答正文，按 `mimeType=multi_load/iframe` 读取 `content`；SSE 中正文可以累计快照更新，完整 JSON 返回聚合后的正文。不要由可选 `metaData` 字段推断本接口提供医疗 Agent 的检索过程、资料来源或业务卡片。
   * 一次完整 JSON 的成功示例
   * `debug: null` 仅演示此可选字段的空值形状，不表示每次都会返回。客户端不应据此推定固定的调试子字段。
   * ```json
   * {
   *   "communication": {
   *     "requestId": "med-model-text-001",
   *     "responseId": 0
   *   },
   *   "data": {
   *     "messages": [
   *       {
   *         "mimeType": "multi_load/iframe",
   *         "status": "complete",
   *         "content": "请结合报告上的参考区间理解各项指标。",
   *         "metaData": {
   *           "multiLoad": []
   *         }
   *       }
   *     ],
   *     "debug": null
   *   },
   *   "errorCode": 0,
   *   "errorMsg": "success"
   * }
   * ```
   * SSE 示例
   * ```text
   * data:{"communication":{"requestId":"med-model-text-001","responseId":0},"data":{"messages":[{"mimeType":"multi_load/iframe","status":"processing","content":"请结合报告上的参考区间。","metaData":{"multiLoad":[]}}]},"errorCode":0,"errorMsg":"success"}
   * event:complete
   * data:{"communication":{"requestId":"med-model-text-001","responseId":1},"data":{"messages":[{"mimeType":"multi_load/iframe","status":"complete","content":"请结合报告上的参考区间理解各项指标。","metaData":{"multiLoad":[]}}]},"errorCode":0,"errorMsg":"success"}
   * ```
   * SSE 按空行分隔事件。complete 可能携带最终正文，也可能携带空对象，先处理其中已有的业务数据再结束。正文累计快照按更新替换，不把快照重复拼接。流内收到 error、断开且缺少正常终帧、或收到业务错误时按失败处理。HTTP 请求号与业务请求号分别记录，便于联调排查。
   * ## 6. 错误与重试
   * 先检查 HTTP 状态。HTTP 200 时继续检查业务 errorCode 或结构化 error，SSE 还要读取流内事件至 complete 或 error。流开始后的错误可在 HTTP 200 的连接中通过 event:error 返回。
   * | 状况 | 处理 |
   * | --- | --- |
   * | `INVALID_REQUEST`、`IMAGE_PROCESSING_ERROR`，HTTP 400 | 核对字段类型、会话、图片编码和媒体授权，修正请求。 |
   * | POP 鉴权错误，或 `AUTH_INVALID_KEY`、`AUTH_INVALID_SIGNATURE`、`AUTH_TIMESTAMP_EXPIRED`、`AUTH_NONCE_REPLAY`，业务网关 HTTP 401 | 按对应认证层核对凭据、正文哈希、时间戳与 nonce。签名已过期或 nonce 已使用时，为新尝试重新签名。 |
   * | `DIRECT_AGENT_FORBIDDEN`、`AUTH_APP_FORBIDDEN`、`AUTH_URI_FORBIDDEN`，HTTP 403 | 核对应用身份、接口权限及已开通的模型或 Agent。 |
   * | `SESSION_ACCESS_DENIED`，HTTP 403 | 核对会话与当前业务身份的归属，保持续聊身份一致，不使用其他用户的会话。 |
   * | `ADMISSION_SERVICE_SUSPENDED`、`PLATFORM_ACCESS_DISABLED`、`AUTH_DISABLED`，HTTP 403 | 当前服务、接口或凭据不可用，联系服务方确认恢复或授权，勿持续重试。 |
   * | `PAYLOAD_TOO_LARGE`，HTTP 413 | 缩小正文或图片，按服务约定的大小、像素和资源限制重新提交。 |
   * | `SESSION_BUSY`、`SESSION_CONFLICT`，HTTP 409 | 等待在途请求结束，核对同一会话的身份和历史托管方后再调用。 |
   * | 限流、配额或下游短时不可用，HTTP 429 | 区分可恢复的限流与需要处理授权或配额的情况。适用重试时采用退避，有可用 Retry-After 时采用其秒数。 |
   * | `DOWNSTREAM_TIMEOUT`，HTTP 504，或流内错误、超时、断线 | 记录业务请求号和 POP 请求号。重试前核对原请求的执行情况，新尝试使用新的时间戳、nonce 和签名。 |
   * 失败 JSON 示例
   * ```json
   * {
   *   "error": {
   *     "code": "INVALID_REQUEST",
   *     "message": "请检查请求参数。",
   *     "requestId": "med-model-text-001"
   *   }
   * }
   * ```
   * 流开始后的错误示例
   * ```text
   * event:error
   * data:{"communication":{"requestId":"med-model-text-001"},"errorCode":"DOWNSTREAM_TIMEOUT","errorMsg":"downstream timeout"}
   * ```
   * 新请求生成新的时间戳、nonce 和签名。请求号用于关联，重复使用同一个值可能再次执行请求。
   * 
   * @param request - MedicalModelInferenceRequest
   * @returns MedicalModelInferenceResponse
   */
  async medicalModelInference(request: $_model.MedicalModelInferenceRequest): Promise<$_model.MedicalModelInferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.MedicalModelInferenceHeaders({ });
    return await this.medicalModelInferenceWithOptions(request, headers, runtime);
  }

  /**
   * 开通千问医疗服务或验证调用配置
   * 
   * @remarks
   * ## 调用医疗服务开通接口
   * 使用当前调用账号向医疗商品申请开通。首次接入时可先验证签名和请求格式，确认后再提交开通。
   * | 项目 | 取值 |
   * | --- | --- |
   * | 服务、操作、版本 | `QwenB2BMed`、`OpenService`、`2026-11-21` |
   * | 方法及路径 | `POST /v1/api/medical/openService`，使用接入时提供的医疗服务 HTTPS Endpoint |
   * | 请求和响应 | `application/json`，响应一次返回 JSON |
   * | 权限 | 调用身份具有 `qwenb2bmed:OpenService` 权限，业务访问凭据获准访问上述路径 |
   * ### 请求与签名
   * 通过阿里云 OpenAPI SDK 或 ACS3 签名调用。直接发 HTTP 时，设置 `x-acs-action: OpenService` 和 `x-acs-version: 2026-11-21` 并按 OpenAPI 规则签名。另填 `X-Request-Id` 和四个 `X-GW-*` 业务签名头。阿里云凭证用于 OpenAPI 鉴权，接入时领取的业务 AK/SK 用于计算业务签名。两种密钥各自在调用端使用。
   * 以下 Python 代码演示如何为一次验证请求生成正文和业务请求头。把生成的 `body` 原样作为 HTTP 正文，再使用阿里云凭证完成 OpenAPI 签名。请求路径后不附加查询参数。
   * ```python
   * import hashlib
   * import hmac
   * import json
   * import os
   * import time
   * import uuid
   * path = "/v1/api/medical/openService"
   * payload = {"openBenefits": False}
   * # 如果接入约定要求提供业务用户身份，签名前加入该字段。
   * # payload["communication"] = {"user_info": {"user_id": "customer-user-001"}}
   * body = json.dumps(payload, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
   * timestamp = str(time.time_ns() // 1_000_000)
   * nonce = uuid.uuid4().hex
   * body_hash = hashlib.sha256(body).hexdigest()
   * canonical = "\\n".join(["POST", path, "", body_hash, timestamp, nonce])
   * signature = hmac.new(os.environ["GW_SECRET_KEY"].encode("utf-8"),
   *                      canonical.encode("utf-8"), hashlib.sha256).hexdigest()
   * headers = {
   *     "Content-Type": "application/json",
   *     "X-Request-Id": uuid.uuid4().hex,
   *     "X-GW-Access": os.environ["GW_ACCESS_KEY"],
   *     "X-GW-Timestamp": timestamp,
   *     "X-GW-Nonce": nonce,
   *     "X-GW-Signature": signature,
   * }
   * ```
   * 业务签名原文共有六行，第三行是空查询串，最后一行末尾没有换行。重发请求时生成新的时间戳、随机串和签名。业务用户 ID 使用接入约定的字段名 `communication.user_info.user_id`。服务开通归属由已认证的调用账号确定。
   * ### 验证、提交与判断结果
   * 仅验证调用时发送以下 JSON。成功响应为 `{"status":"TEST_OK"}`。
   * ```json
   * {"openBenefits":false}
   * ```
   * 提交实际开通时将 `openBenefits` 设为布尔值 `true`，按新正文重新签名。以下示例适用于需要业务用户身份的凭据。
   * ```json
   * {"openBenefits":true,"communication":{"user_info":{"user_id":"customer-user-001"}}}
   * ```
   * 订单已受理时，响应示例如下。
   * ```json
   * {"status":"OPENING","orderId":"2000000000000001"}
   * ```
   * 服务已确认开通时，响应示例如下。
   * ```json
   * {"status":"ACTIVE","orderId":"2000000000000001","spInstanceId":"sp-example-001"}
   * ```
   * | `status` | 客户端处理 |
   * | --- | --- |
   * | `TEST_OK` | 此次调用验证成功。需要实际开通时，另行发送 `openBenefits=true`。 |
   * | `OPENING` | 订单已受理，保存 `orderId`，等待开通完成。 |
   * | `ACTIVE` | 医疗服务已确认开通。保存返回的订单号和实例 ID，可按授权调用医疗接口。 |
   * | `ORDER_UNKNOWN` | 服务暂时无法确认订单结果，保留请求关联号核实订单后再决定是否重新提交。 |
   * | `REJECTED` | 开通申请被拒绝，检查账号可用额度。 |
   * `openBenefits=false` 仅验证本次请求，不能用于查询已有订单。再次发送 `openBenefits=true` 会再次发起开通操作。订单号、实例 ID 都按字符串保存。
   * 
   * @param request - OpenServiceRequest
   * @param headers - OpenServiceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenServiceResponse
   */
  async openServiceWithOptions(request: $_model.OpenServiceRequest, headers: $_model.OpenServiceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.OpenServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.communication)) {
      body["communication"] = request.communication;
    }

    if (!$dara.isNull(request.openBenefits)) {
      body["openBenefits"] = request.openBenefits;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xGWAccess)) {
      realHeaders["X-GW-Access"] = String(headers.xGWAccess);
    }

    if (!$dara.isNull(headers.xGWNonce)) {
      realHeaders["X-GW-Nonce"] = String(headers.xGWNonce);
    }

    if (!$dara.isNull(headers.xGWSignature)) {
      realHeaders["X-GW-Signature"] = String(headers.xGWSignature);
    }

    if (!$dara.isNull(headers.xGWTimestamp)) {
      realHeaders["X-GW-Timestamp"] = String(headers.xGWTimestamp);
    }

    if (!$dara.isNull(headers.xRequestId)) {
      realHeaders["X-Request-Id"] = String(headers.xRequestId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenService",
      version: "2026-11-21",
      protocol: "HTTPS",
      pathname: `/v1/api/medical/openService`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenServiceResponse({}));
  }

  /**
   * 开通千问医疗服务或验证调用配置
   * 
   * @remarks
   * ## 调用医疗服务开通接口
   * 使用当前调用账号向医疗商品申请开通。首次接入时可先验证签名和请求格式，确认后再提交开通。
   * | 项目 | 取值 |
   * | --- | --- |
   * | 服务、操作、版本 | `QwenB2BMed`、`OpenService`、`2026-11-21` |
   * | 方法及路径 | `POST /v1/api/medical/openService`，使用接入时提供的医疗服务 HTTPS Endpoint |
   * | 请求和响应 | `application/json`，响应一次返回 JSON |
   * | 权限 | 调用身份具有 `qwenb2bmed:OpenService` 权限，业务访问凭据获准访问上述路径 |
   * ### 请求与签名
   * 通过阿里云 OpenAPI SDK 或 ACS3 签名调用。直接发 HTTP 时，设置 `x-acs-action: OpenService` 和 `x-acs-version: 2026-11-21` 并按 OpenAPI 规则签名。另填 `X-Request-Id` 和四个 `X-GW-*` 业务签名头。阿里云凭证用于 OpenAPI 鉴权，接入时领取的业务 AK/SK 用于计算业务签名。两种密钥各自在调用端使用。
   * 以下 Python 代码演示如何为一次验证请求生成正文和业务请求头。把生成的 `body` 原样作为 HTTP 正文，再使用阿里云凭证完成 OpenAPI 签名。请求路径后不附加查询参数。
   * ```python
   * import hashlib
   * import hmac
   * import json
   * import os
   * import time
   * import uuid
   * path = "/v1/api/medical/openService"
   * payload = {"openBenefits": False}
   * # 如果接入约定要求提供业务用户身份，签名前加入该字段。
   * # payload["communication"] = {"user_info": {"user_id": "customer-user-001"}}
   * body = json.dumps(payload, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
   * timestamp = str(time.time_ns() // 1_000_000)
   * nonce = uuid.uuid4().hex
   * body_hash = hashlib.sha256(body).hexdigest()
   * canonical = "\\n".join(["POST", path, "", body_hash, timestamp, nonce])
   * signature = hmac.new(os.environ["GW_SECRET_KEY"].encode("utf-8"),
   *                      canonical.encode("utf-8"), hashlib.sha256).hexdigest()
   * headers = {
   *     "Content-Type": "application/json",
   *     "X-Request-Id": uuid.uuid4().hex,
   *     "X-GW-Access": os.environ["GW_ACCESS_KEY"],
   *     "X-GW-Timestamp": timestamp,
   *     "X-GW-Nonce": nonce,
   *     "X-GW-Signature": signature,
   * }
   * ```
   * 业务签名原文共有六行，第三行是空查询串，最后一行末尾没有换行。重发请求时生成新的时间戳、随机串和签名。业务用户 ID 使用接入约定的字段名 `communication.user_info.user_id`。服务开通归属由已认证的调用账号确定。
   * ### 验证、提交与判断结果
   * 仅验证调用时发送以下 JSON。成功响应为 `{"status":"TEST_OK"}`。
   * ```json
   * {"openBenefits":false}
   * ```
   * 提交实际开通时将 `openBenefits` 设为布尔值 `true`，按新正文重新签名。以下示例适用于需要业务用户身份的凭据。
   * ```json
   * {"openBenefits":true,"communication":{"user_info":{"user_id":"customer-user-001"}}}
   * ```
   * 订单已受理时，响应示例如下。
   * ```json
   * {"status":"OPENING","orderId":"2000000000000001"}
   * ```
   * 服务已确认开通时，响应示例如下。
   * ```json
   * {"status":"ACTIVE","orderId":"2000000000000001","spInstanceId":"sp-example-001"}
   * ```
   * | `status` | 客户端处理 |
   * | --- | --- |
   * | `TEST_OK` | 此次调用验证成功。需要实际开通时，另行发送 `openBenefits=true`。 |
   * | `OPENING` | 订单已受理，保存 `orderId`，等待开通完成。 |
   * | `ACTIVE` | 医疗服务已确认开通。保存返回的订单号和实例 ID，可按授权调用医疗接口。 |
   * | `ORDER_UNKNOWN` | 服务暂时无法确认订单结果，保留请求关联号核实订单后再决定是否重新提交。 |
   * | `REJECTED` | 开通申请被拒绝，检查账号可用额度。 |
   * `openBenefits=false` 仅验证本次请求，不能用于查询已有订单。再次发送 `openBenefits=true` 会再次发起开通操作。订单号、实例 ID 都按字符串保存。
   * 
   * @param request - OpenServiceRequest
   * @returns OpenServiceResponse
   */
  async openService(request: $_model.OpenServiceRequest): Promise<$_model.OpenServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.OpenServiceHeaders({ });
    return await this.openServiceWithOptions(request, headers, runtime);
  }

}
