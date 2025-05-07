// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupResponseBodyRelatedCustinsInfoRelatedCustinsInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the parameter template was applied.
   * 
   * @example
   * 2022-10-17T03:19:02Z
   */
  appliedTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-bp170****
   */
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      appliedTime: 'AppliedTime',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedTime: 'string',
      DBInstanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

