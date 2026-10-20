// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * Only ECK cluster IDs with the eck- prefix are accepted. Legacy short hexadecimal cluster IDs are not supported. You can call DescribeClustersV1 to obtain the ID. The Name parameter must be specified when listing clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * eck-11111111
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

