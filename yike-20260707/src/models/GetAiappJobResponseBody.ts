// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIAppJobResponseBodyAIAppJob extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2026-10-06T02:06:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the task was completed.
   * 
   * @example
   * 2026-10-06T16:59:25Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * a2880a70cec1414cac476bce0bd39ad7
   */
  jobId?: string;
  /**
   * @remarks
   * The node results of the workflow task. The results are in JSON format and vary based on the workflow configuration.
   * 
   * @example
   * {\\"Key\\":\\"Value\\"}
   */
  nodeResults?: string;
  /**
   * @remarks
   * The task outputs.
   * 
   * @example
   * {\\"Status\\":\\"Success\\"}
   */
  outputs?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - init: The task is created.
   * - running: The task is running.
   * - succeeded: The task succeeded.
   * - failed: The task failed.
   * - stopped: The task is stopped.
   * 
   * @example
   * succeeded
   */
  status?: string;
  /**
   * @remarks
   * The custom information.
   * 
   * @example
   * {\\"Key\\":\\"Value\\"}
   */
  userData?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * xxxxxx
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      jobId: 'JobId',
      nodeResults: 'NodeResults',
      outputs: 'Outputs',
      status: 'Status',
      userData: 'UserData',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finishTime: 'string',
      jobId: 'string',
      nodeResults: 'string',
      outputs: 'string',
      status: 'string',
      userData: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIAppJobResponseBodyArtifacts extends $dara.Model {
  /**
   * @remarks
   * The asset ID, which is the media asset ID obtained after registration.
   * 
   * @example
   * xxxx77i16crgqtn96ip914bmixxxx
   */
  assetId?: string;
  /**
   * @remarks
   * The asset name.
   * 
   * @example
   * test_00x
   */
  name?: string;
  /**
   * @remarks
   * The asset status.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The asset type. Valid values: image, audio, video, document, and text.
   * 
   * @example
   * image
   */
  type?: string;
  /**
   * @remarks
   * The asset URL.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i1/O1CN0157aHKQ1LlJ45vCQ8w_!!6000000001339-0-tps-1080-773.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      assetId: 'AssetId',
      name: 'Name',
      status: 'Status',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetId: 'string',
      name: 'string',
      status: 'string',
      type: 'string',
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

export class GetAIAppJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task information.
   */
  AIAppJob?: GetAIAppJobResponseBodyAIAppJob;
  /**
   * @remarks
   * The output assets.
   * 
   * @example
   * [
   *   {
   *     "Status": "completed",
   *     "Type": "image",
   *     "Url": "xxx",
   *     "Name": "blue.png"
   *   },
   *   {
   *     "Status": "completed",
   *     "Type": "image",
   *     "Url": "xxx",
   *     "Name": "red.png"
   *   }
   * ]
   */
  artifacts?: GetAIAppJobResponseBodyArtifacts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIAppJob: 'AIAppJob',
      artifacts: 'Artifacts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIAppJob: GetAIAppJobResponseBodyAIAppJob,
      artifacts: { 'type': 'array', 'itemType': GetAIAppJobResponseBodyArtifacts },
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIAppJob && typeof (this.AIAppJob as any).validate === 'function') {
      (this.AIAppJob as any).validate();
    }
    if(Array.isArray(this.artifacts)) {
      $dara.Model.validateArray(this.artifacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

