// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerCriteriaRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition. Valid values:
   * 
   * *   **pod**: pod
   * *   **appName**: application name
   * *   **clusterId**: cluster ID
   * *   **namespace**: namespace
   * *   **image**: image
   * *   **containerScan**: container scan
   * 
   * @example
   * clusterId
   */
  groupField?: string;
  /**
   * @remarks
   * The value of the filter condition. The value can be an application name, node name, namespace, cluster name, public IP address, pod address, region, pod, instance ID, cluster ID, or container ID. Fuzzy match is supported.
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

