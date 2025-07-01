// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFilesetsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter name. Valid values:
   * 
   * *   FsetIds: filters filesets by fileset ID.
   * *   FileSystemPath: filters filesets based on the path of a fileset in a CPFS file system.
   * *   Description: filters filesets based on the fileset description.
   * *   QuotaExists: filters filesets based on whether quotas exist.
   * 
   * >  Only CPFS for LINGJUN V2.7.0 and later support the QuotaExists parameter.
   * 
   * @example
   * FsetIds
   */
  key?: string;
  /**
   * @remarks
   * The filter value. This parameter does not support wildcards.
   * 
   * *   If Key is set to FsetIds, set Value to a fileset ID or a part of the fileset ID. You can specify a fileset ID or a group of fileset IDs. You can specify a maximum of 10 fileset IDs. Example: `fset-1902718ea0ae****` or `fset-1902718ea0ae****,fset-3212718ea0ae****`.
   * *   If Key is set to FileSystemPath, set Value to the path or a part of the path of a fileset in a CPFS file system. The value must be 2 to 1024 characters in length. The value must be encoded in UTF-8.
   * *   If Key is set to Description, set Value to a fileset description or a part of the fileset description.
   * *   If Key is set to QuotaExists, set Value to true or false. If you do not specify the parameter, all filesets are returned.
   * 
   * @example
   * fset-1902718ea0ae****,fset-3212718ea0ae****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

