// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeploymentSetSupportedInstanceTypeFamilyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance families that support the deployment strategy.
   * 
   * @example
   * ecs.i2g,ecs.i1,ecs.i2ne,ecs.i2gne
   */
  instanceTypeFamilies?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B7DB-A3DC7DE1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypeFamilies: 'InstanceTypeFamilies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeFamilies: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

