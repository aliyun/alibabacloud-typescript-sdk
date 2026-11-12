// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageBaseInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The business line code. Default value: 1.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The image ID. You can specify multiple IDs separated by commas (,). The query matches any of the specified IDs.
   * 
   * @example
   * img-bp13mu****
   */
  imageId?: string;
  /**
   * @remarks
   * The image query keyword. Fuzzy matching is performed on both the image name and the image ID.
   * 
   * @example
   * test
   */
  imageName?: string;
  /**
   * @remarks
   * The image type. Valid values: System (system image), User (custom image), Shared (shared image), and Community (community image).
   * 
   * @example
   * User
   */
  imageType?: string;
  /**
   * @remarks
   * The image operating system type. Valid values: Windows (Windows operating system), Linux (Linux operating system), Android (Android operating system), and Unknown (unknown operating system).
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The image package type. Valid values: Ecs (ECS image), Vhd (VHD image), Container (container image), Ecs_Container (ECS and container composite image), and K8s_Node (Kubernetes node image).
   * 
   * @example
   * Ecs
   */
  packageType?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. If you do not specify this parameter or specify a value less than 1, the first page is returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 100. If the value is less than 1, 10 entries are returned. If the value is greater than 100, 100 entries are returned.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type, which is used to filter the products to which the images belong. Examples: CloudDesktop (WUYING Workspace), CloudApp (WUYING Cloud App), and WuyingServer (WUYING Workstation).
   * 
   * @example
   * CloudDesktop
   */
  productType?: string;
  /**
   * @remarks
   * The image protocol type. Valid values: ASP (Alibaba Cloud self-developed ASP protocol) and HDX (HDX protocol).
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The image status. Valid values: INIT (initialization), CREATING (creating), AVAILABLE (available), and CREATE_FAILED (creation failed). If you do not specify this parameter, all non-deleted images are queried. Deleted images are not returned.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageType: 'ImageType',
      osType: 'OsType',
      packageType: 'PackageType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      protocolType: 'ProtocolType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'number',
      imageId: 'string',
      imageName: 'string',
      imageType: 'string',
      osType: 'string',
      packageType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
      protocolType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

