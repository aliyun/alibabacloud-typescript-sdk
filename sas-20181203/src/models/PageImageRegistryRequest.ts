// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageImageRegistryRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The image repository name. Fuzzy match is supported.
   * 
   * @example
   * asa
   */
  registryNameLike?: string;
  /**
   * @remarks
   * The list of image repository types to include.
   */
  registryTypeInList?: string[];
  /**
   * @remarks
   * The list of image repository types to exclude.
   */
  registryTypeNotInList?: string[];
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 140.207.XXX.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      registryNameLike: 'RegistryNameLike',
      registryTypeInList: 'RegistryTypeInList',
      registryTypeNotInList: 'RegistryTypeNotInList',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      registryNameLike: 'string',
      registryTypeInList: { 'type': 'array', 'itemType': 'string' },
      registryTypeNotInList: { 'type': 'array', 'itemType': 'string' },
      sourceIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.registryTypeInList)) {
      $dara.Model.validateArray(this.registryTypeInList);
    }
    if(Array.isArray(this.registryTypeNotInList)) {
      $dara.Model.validateArray(this.registryTypeNotInList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

