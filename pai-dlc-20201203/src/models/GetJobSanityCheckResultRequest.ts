// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobSanityCheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * The nth time for which the job sanity check is performed.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sanityCheckNumber?: number;
  /**
   * @remarks
   * The phase in which the job sanity check is performed.
   * 
   * *   CheckInit
   * *   DeviceCheck
   * *   SingleNodeCommCheck
   * *   TwoNodeCommCheck
   * *   AllNodeCommCheck
   * 
   * @example
   * DeviceCheck
   */
  sanityCheckPhase?: string;
  /**
   * @remarks
   * The token information for job sharing. For more information about how to obtain the token information, see [GetToken](https://help.aliyun.com/document_detail/2557812.html).
   * 
   * @example
   * eyJhbG******zI1NiIsInR5cCI6IkpXVCJ9.eyJle****jE3MDk1Mzk0NDIsImlhdCI6MTcwODkzNDY0MiwidXNlcl9pZCI6IjE3NTgwNTQxNjI0Mzg2NTUiLCJ0YXJnZXRfaWQiOiJkbGM1OGh1a2xyYzZwdGMyIiwidGFyZ2V0X3R5cGUiOiJqb2IifQ.GNL7jo6****mgKKv0QeGIYgvBufSU-PH_EQttX****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      sanityCheckNumber: 'SanityCheckNumber',
      sanityCheckPhase: 'SanityCheckPhase',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sanityCheckNumber: 'number',
      sanityCheckPhase: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

