// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * k8s-test
   */
  appGroupName?: string;
  /**
   * @remarks
   * The namespace. You can obtain the ID of the namespace on the **Namespace** page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * 1a72ecb1-b4cc-400a-a71b-20cdec9b****
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required only for specific third-party integrations.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupName: 'AppGroupName',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupName: 'string',
      namespace: 'string',
      namespaceSource: 'string',
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

