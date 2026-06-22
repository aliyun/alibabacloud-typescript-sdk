// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerCriteriaRequest extends $dara.Model {
  /**
   * @remarks
   * The search field. Valid values:
   * - **pod**: pod.
   * - **appName**: application name.
   * - **clusterId**: cluster ID.
   * - **namespace**: namespace.
   * - **image**: image.
   * - **containerScan**: container scan.
   * 
   * @example
   * clusterId
   */
  groupField?: string;
  /**
   * @remarks
   * The value of the search field. Fuzzy match is supported for application names, node names, namespaces, cluster names, public IP addresses, pod addresses, regions, pods, instance IDs, cluster IDs, and container IDs.
   * 
   * @example
   * cfb41a869c71e4678a97021582dd8a****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      groupField: 'GroupField',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupField: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

