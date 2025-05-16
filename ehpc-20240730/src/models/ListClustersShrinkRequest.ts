// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster IDs. You can specify up to 20 IDs.
   */
  clusterIdsShrink?: string;
  /**
   * @remarks
   * The cluster names. You can specify up to 20 names.
   */
  clusterNamesShrink?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100. Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterIdsShrink: 'ClusterIds',
      clusterNamesShrink: 'ClusterNames',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIdsShrink: 'string',
      clusterNamesShrink: 'string',
      pageNumber: 'number',
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

