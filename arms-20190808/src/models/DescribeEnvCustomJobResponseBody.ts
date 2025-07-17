// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnvCustomJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * If the **encryptYaml** parameter is set to `true`, a Base64-encoded YAML string is returned. Otherwise, a plaintext YAML string is returned.
   * 
   * @example
   * Refer to supplementary instructions.
   */
  configYaml?: string;
  /**
   * @remarks
   * The name of the custom job.
   * 
   * @example
   * customJob1
   */
  customJobName?: string;
  /**
   * @remarks
   * The ID of the environment instance.
   * 
   * @example
   * env-xxxxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * *   run
   * *   stop
   * 
   * @example
   * run
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configYaml: 'ConfigYaml',
      customJobName: 'CustomJobName',
      environmentId: 'EnvironmentId',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configYaml: 'string',
      customJobName: 'string',
      environmentId: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvCustomJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned struct.
   */
  data?: DescribeEnvCustomJobResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A9AEA84-7186-4D8D-B498-4585C6A2****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeEnvCustomJobResponseBodyData,
      message: 'string',
      requestId: 'string',
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

