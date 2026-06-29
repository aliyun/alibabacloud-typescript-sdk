// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessPointRequest extends $dara.Model {
  /**
   * @remarks
   * The access point ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-ie15yd****
   */
  accessPointId?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

