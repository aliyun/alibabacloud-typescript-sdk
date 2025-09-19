// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContainerScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster to which the container belongs.
   * 
   * > You can call the [DescribeGroupedContainerInstances](https://help.aliyun.com/document_detail/182997.html) operation to query the IDs of clusters.
   * 
   * @example
   * c22143730ab6e40b09ec7c1c51d4d****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the container.
   * 
   * @example
   * c927cf190e886696db53cda0efb57145394ccf0bf9f525353fa5c22a26e4****
   */
  containerIds?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      containerIds: 'ContainerIds',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      containerIds: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

