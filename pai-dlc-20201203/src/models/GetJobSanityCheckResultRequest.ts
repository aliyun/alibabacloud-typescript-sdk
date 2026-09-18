// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobSanityCheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * The sequence number of the computing power health check for the job.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sanityCheckNumber?: number;
  /**
   * @remarks
   * The phase of the computing power health check. Valid values:
   * - CheckInit: environment preparation check.
   * - DeviceCheck: single-card computing power check.
   * - SingleNodeCommCheck: intra-node communication check.
   * - TwoNodeCommCheck: two-node communication check.
   * - AllNodeCommCheck: all-node communication check.
   * 
   * @example
   * DeviceCheck
   */
  sanityCheckPhase?: string;
  /**
   * @remarks
   * The token information in the job sharing token. To obtain the token, see [GetToken](https://help.aliyun.com/document_detail/2557812.html).
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

