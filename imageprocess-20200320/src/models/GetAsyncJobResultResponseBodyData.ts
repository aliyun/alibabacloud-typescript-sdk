// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsyncJobResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @example
   * paramsIllegal
   */
  errorMessage?: string;
  /**
   * @example
   * CCCAAAFB-5628-40DD-A12C-6F52326C1B03
   */
  jobId?: string;
  /**
   * @example
   * {\\"NewProbability\\":\\"4.062644e-06\\",\\"NormalProbability\\":\\"0.7230905\\",\\"OtherProbability\\":\\"0.27690542\\",\\"LesionRatio\\":\\"0.9387283236994219\\",\\"Mask\\":\\"http://algo-app-aic-med-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/covid19-dcm/unspecified/2020032702/1b1e1018-6fcf-11ea-8fa1-d20b34387541.nii.gz?Expires=1585276394&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=%2F1LNGWJUqvY0VRYGgg8Ldtb3BF****\\"}
   */
  result?: string;
  /**
   * @example
   * PROCESS_SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobId: 'string',
      result: 'string',
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

