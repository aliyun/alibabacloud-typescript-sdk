// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVideoAuditResultResponseBodyDataImageUrls extends $dara.Model {
  /**
   * @remarks
   * 图片ID，与AliyunImageAuditResult中的dataId对应
   * 
   * @example
   * img001
   */
  id?: string;
  /**
   * @example
   * 1000
   */
  timestamp?: number;
  /**
   * @example
   * https://example.com/image1.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      timestamp: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVideoAuditResultResponseBodyDataResultsResult extends $dara.Model {
  /**
   * @remarks
   * 0到100分，保留到小数点后2位，部分标签无置信分
   * 
   * @example
   * 99.5
   */
  confidence?: number;
  /**
   * @remarks
   * Label字段的解释说明
   * 
   * @example
   * 未检测出风险
   */
  description?: string;
  /**
   * @remarks
   * 图片内容检测运算后返回的标签，如：nonLabel（未检测出风险）
   * 
   * @example
   * nonLabel
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVideoAuditResultResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * 对应图片的ID，与ImageUrl中的id字段对应
   * 
   * @example
   * d411ed15e8fc154fd0ef5addabfee04b
   */
  dataId?: string;
  /**
   * @remarks
   * 审核请求ID
   * 
   * @example
   * B5D1CF9E-0404-51E3-A28E-A5C7D95B6C71
   */
  reqId?: string;
  /**
   * @remarks
   * 图片检测的风险标签、置信分等参数结果
   */
  result?: QueryVideoAuditResultResponseBodyDataResultsResult[];
  /**
   * @remarks
   * 风险等级：high(高风险)、medium(中风险)、low(低风险)、none(未检测到风险)
   * 
   * @example
   * none
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      reqId: 'ReqId',
      result: 'Result',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      reqId: 'string',
      result: { 'type': 'array', 'itemType': QueryVideoAuditResultResponseBodyDataResultsResult },
      riskLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVideoAuditResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 视频总时长（秒）
   * 
   * @example
   * 120.5
   */
  duration?: number;
  /**
   * @remarks
   * 任务执行失败时的错误信息
   */
  errorMessage?: string;
  /**
   * @remarks
   * 视频帧率（FPS）
   * 
   * @example
   * 30.0
   */
  fps?: number;
  /**
   * @remarks
   * 已经完成审核的帧数
   * 
   * @example
   * 120
   */
  frameAudited?: number;
  /**
   * @remarks
   * 视频高度（像素）
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * 抽取的图片URL列表
   */
  imageUrls?: QueryVideoAuditResultResponseBodyDataImageUrls[];
  /**
   * @remarks
   * 图片审核结果详情
   */
  results?: QueryVideoAuditResultResponseBodyDataResults[];
  /**
   * @remarks
   * 任务状态：PENDING(待执行)、RUNNING(执行中)、SUCCESSED(成功)、FAILED(失败)、CANCELED(取消)
   * 
   * @example
   * SUCCESSED
   */
  status?: string;
  /**
   * @remarks
   * 视频审校的文本结果
   * 
   * @example
   * 视频审核完成
   */
  text?: string;
  /**
   * @remarks
   * 需要审核的视频帧总数
   * 
   * @example
   * 120
   */
  totalFrameAudit?: number;
  /**
   * @remarks
   * 视频总帧数
   * 
   * @example
   * 3615
   */
  totalFrames?: number;
  /**
   * @remarks
   * 检测到的视频分镜总数
   * 
   * @example
   * 15
   */
  totalShots?: number;
  /**
   * @remarks
   * 被审核的视频文件Key
   * 
   * @example
   * video/test.mp4
   */
  videoFileKey?: string;
  /**
   * @remarks
   * 被审核的视频URL地址
   * 
   * @example
   * https://example.com/video.mp4
   */
  videoUrl?: string;
  /**
   * @remarks
   * 视频宽度（像素）
   * 
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      errorMessage: 'ErrorMessage',
      fps: 'Fps',
      frameAudited: 'FrameAudited',
      height: 'Height',
      imageUrls: 'ImageUrls',
      results: 'Results',
      status: 'Status',
      text: 'Text',
      totalFrameAudit: 'TotalFrameAudit',
      totalFrames: 'TotalFrames',
      totalShots: 'TotalShots',
      videoFileKey: 'VideoFileKey',
      videoUrl: 'VideoUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      errorMessage: 'string',
      fps: 'number',
      frameAudited: 'number',
      height: 'number',
      imageUrls: { 'type': 'array', 'itemType': QueryVideoAuditResultResponseBodyDataImageUrls },
      results: { 'type': 'array', 'itemType': QueryVideoAuditResultResponseBodyDataResults },
      status: 'string',
      text: 'string',
      totalFrameAudit: 'number',
      totalFrames: 'number',
      totalShots: 'number',
      videoFileKey: 'string',
      videoUrl: 'string',
      width: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVideoAuditResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务处理结果状态码
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * 视频审校的详细结果
   */
  data?: QueryVideoAuditResultResponseBodyData;
  /**
   * @remarks
   * HTTP响应状态码
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * 业务处理结果描述信息
   * 
   * @example
   * 查询成功
   */
  message?: string;
  /**
   * @remarks
   * 本次API请求的唯一标识
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * 请求是否处理成功
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryVideoAuditResultResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

