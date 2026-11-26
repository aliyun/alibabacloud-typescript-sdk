// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BeginAssetUploadShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 登记新资产，或为指定资产创建、复用上传会话。覆盖授权、最近 token 幂等检查、来源版本去重与加工代次分配由管控层原子完成。
   * 
   * This parameter is required.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * 可选。提供时须为非空白字符串，最长 128 个字符；仅对该资产最近一次 Begin 保存的 token 幂等，后续 Begin（包括省略 clientToken 的请求）会替换最近请求标识。命中时必须使用相同规范化请求，包括 sourceETag，否则返回幂等冲突。未提供时按新的上传意图处理，不保证跨请求重试幂等；同时未指定 assetId 时每次请求创建新资产。与来源版本去重独立：被后续 Begin 替换的旧 token 再次到来时按新意图处理；覆盖已有资产仍须 overwrite=true，并可在指定稳定 assetId 时按 sourceETag 规则复用当前会话。
   * 
   * @example
   * asset-upload-001
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

