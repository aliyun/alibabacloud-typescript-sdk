// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * node-exporter
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the cluster to which the container belongs.
   * 
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of clusters.
   * 
   * @example
   * c22143730ab6e40b09ec7c1c51d4d****
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the attribute that is used for the query. Valid values:
   * 
   * *   **namespace**: the namespace
   * *   **appName**: the application name
   * *   **image**: the image
   * *   **tag**: the tag
   * 
   * This parameter is required.
   * 
   * @example
   * namespace
   */
  fieldName?: string;
  /**
   * @remarks
   * The value of the attribute that is used for the query.
   * 
   * @example
   * demo4
   */
  fieldValue?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * test-name-01
   */
  namespace?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 200.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      currentPage: 'CurrentPage',
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
      namespace: 'Namespace',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      currentPage: 'number',
      fieldName: 'string',
      fieldValue: 'string',
      namespace: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

