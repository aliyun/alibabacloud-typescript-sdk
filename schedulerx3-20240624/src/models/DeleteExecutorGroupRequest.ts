// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExecutorGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * ID。
   * 
   * This parameter is required.
   * 
   * @example
   * 83163
   */
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

