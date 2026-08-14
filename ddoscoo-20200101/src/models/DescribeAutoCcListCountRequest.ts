// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoCcListCountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  queryType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queryType: 'QueryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      queryType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

