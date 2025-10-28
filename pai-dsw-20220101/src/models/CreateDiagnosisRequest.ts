// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiagnosisRequest extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtFailureTime?: string;
  /**
   * @example
   * dsw-5bk19******n97w
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * InstanceStartFailed
   */
  problemCategory?: string;
  static names(): { [key: string]: string } {
    return {
      gmtFailureTime: 'GmtFailureTime',
      instanceId: 'InstanceId',
      problemCategory: 'ProblemCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtFailureTime: 'string',
      instanceId: 'string',
      problemCategory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

