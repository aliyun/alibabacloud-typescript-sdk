// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVulListByIdRequest extends $dara.Model {
  /**
   * @remarks
   * Current page
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Whether it has been processed; y: processed; n: not processed
   * 
   * @example
   * n
   */
  dealed?: string;
  /**
   * @remarks
   * Primary key ID
   * 
   * This parameter is required.
   * 
   * @example
   * 4209205
   */
  id?: number;
  /**
   * @remarks
   * Risk level
   * 
   * @example
   * asap,later,nntf
   */
  necessity?: string;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Asset information of the vulnerability to be queried, which can be set as asset name, public IP, or private IP.
   * 
   * @example
   * production_nat_cn-hangzhou_zone_105
   */
  remark?: string;
  /**
   * @remarks
   * UUID of the server with the vulnerability to be queried. Multiple UUIDs should be separated by a comma (,).
   * 
   * @example
   * 3615b908-995a-4edb-bc85-1981b4e94ba0,9c52cf9a-d8ba-4e31-ae06-500b879ee4e6,4b7de3cf-c4ac-42fc-8804-35070493dc29,f3c01525-0777-4c97-88d9-bec11afd4a6a,a80bd516-c4f3-4c27-a169-c8abfaf9e89e
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      id: 'Id',
      necessity: 'Necessity',
      pageSize: 'PageSize',
      remark: 'Remark',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dealed: 'string',
      id: 'number',
      necessity: 'string',
      pageSize: 'number',
      remark: 'string',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

