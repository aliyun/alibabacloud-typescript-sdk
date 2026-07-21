// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Personalizedtxt2imgQueryInferenceJobInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the inference job was created.
   * 
   * @example
   * 2023-12-25T12:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the inference job.
   * 
   * @example
   * 3220
   */
  id?: string;
  /**
   * @remarks
   * The status of the inference job.
   * 
   * @example
   * FINISHED
   */
  jobStatus?: string;
  /**
   * @remarks
   * The progress of the inference job.
   * 
   * @example
   * 0.5
   */
  jobTrainProgress?: number;
  /**
   * @remarks
   * The ID of the model.
   * 
   * @example
   * modelId-xxxx-xxxx-xxxx
   */
  modelId?: string;
  /**
   * @remarks
   * The ID of the prompt.
   * 
   * @example
   * promptId-xxxx-xxxx-xxxx
   */
  promptId?: string;
  /**
   * @remarks
   * A list of URLs for the generated images.
   * 
   * @example
   * 0000.png
   */
  resultImageUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      jobStatus: 'jobStatus',
      jobTrainProgress: 'jobTrainProgress',
      modelId: 'modelId',
      promptId: 'promptId',
      resultImageUrl: 'resultImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      jobStatus: 'string',
      jobTrainProgress: 'number',
      modelId: 'string',
      promptId: 'string',
      resultImageUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resultImageUrl)) {
      $dara.Model.validateArray(this.resultImageUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryInferenceJobInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The object that contains the query results.
   * 
   * @example
   * []
   */
  data?: Personalizedtxt2imgQueryInferenceJobInfoResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Personalizedtxt2imgQueryInferenceJobInfoResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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

