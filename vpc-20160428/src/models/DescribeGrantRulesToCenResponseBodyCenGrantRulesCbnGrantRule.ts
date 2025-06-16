// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGrantRulesToCenResponseBodyCenGrantRulesCbnGrantRule extends $dara.Model {
  /**
   * @remarks
   * The ID of the authorized CEN instance.
   * 
   * @example
   * cen-9gsm1q2yh1prpt****
   */
  cenInstanceId?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account to which the authorized CEN instance belongs.
   * 
   * @example
   * 132193271328****
   */
  cenOwnerId?: number;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2019-11-15T09:26:36Z
   */
  creationTime?: string;
  static names(): { [key: string]: string } {
    return {
      cenInstanceId: 'CenInstanceId',
      cenOwnerId: 'CenOwnerId',
      creationTime: 'CreationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenInstanceId: 'string',
      cenOwnerId: 'number',
      creationTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

