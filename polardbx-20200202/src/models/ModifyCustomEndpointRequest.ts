// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cep-002
   */
  customEndpointId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mydatabase
   */
  DBInstanceName?: string;
  /**
   * @example
   * secondary-endpoint
   */
  name?: string;
  /**
   * @example
   * true
   */
  nodeAutoEnter?: boolean;
  /**
   * @remarks
   * node ids
   * 
   * @example
   * node3
   */
  nodeIds?: string;
  /**
   * @example
   * master
   */
  nodeRole?: string;
  /**
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      customEndpointId: 'CustomEndpointId',
      DBInstanceName: 'DBInstanceName',
      name: 'Name',
      nodeAutoEnter: 'NodeAutoEnter',
      nodeIds: 'NodeIds',
      nodeRole: 'NodeRole',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEndpointId: 'string',
      DBInstanceName: 'string',
      name: 'string',
      nodeAutoEnter: 'boolean',
      nodeIds: 'string',
      nodeRole: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

