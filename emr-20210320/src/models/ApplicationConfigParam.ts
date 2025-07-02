// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplicationConfigParam extends $dara.Model {
  /**
   * @example
   * DELETE
   */
  configAction?: string;
  /**
   * @example
   * hdfs-site.xml
   */
  configFileName?: string;
  /**
   * @example
   * namenode checkpoint period
   */
  configItemDescription?: string;
  /**
   * @example
   * dfs.namenode.checkpoint.period
   */
  configItemKey?: string;
  /**
   * @example
   * 3600s
   */
  configItemValue?: string;
  configScope?: string;
  /**
   * @example
   * RESTART
   */
  effectiveActions?: string;
  /**
   * @example
   * MANUAL
   */
  effectiveType?: string;
  /**
   * @example
   * G-DE1CF4661E09****
   */
  nodeGroupId?: string;
  /**
   * @example
   * i-bp10h9rezawz1i4o****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      configAction: 'ConfigAction',
      configFileName: 'ConfigFileName',
      configItemDescription: 'ConfigItemDescription',
      configItemKey: 'ConfigItemKey',
      configItemValue: 'ConfigItemValue',
      configScope: 'ConfigScope',
      effectiveActions: 'EffectiveActions',
      effectiveType: 'EffectiveType',
      nodeGroupId: 'NodeGroupId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configAction: 'string',
      configFileName: 'string',
      configItemDescription: 'string',
      configItemKey: 'string',
      configItemValue: 'string',
      configScope: 'string',
      effectiveActions: 'string',
      effectiveType: 'string',
      nodeGroupId: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

