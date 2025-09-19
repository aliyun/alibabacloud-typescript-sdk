// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyCountRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the asset fingerprints. Separate multiple types with commas (,). Valid values:
   * 
   * *   **port**: port
   * *   **process**: process
   * *   **software**: software
   * *   **user**: account
   * *   **cron**: scheduled task
   * *   **sca**: middleware
   * *   **web**: website
   * *   **database**: database
   * *   **lkm**: kernel module
   * *   **autorun**: startup item
   * *   **web_server**: web service
   * 
   * @example
   * port,process
   */
  type?: string;
  /**
   * @remarks
   * The UUIDs of the assets. Separate multiple UUIDs with commas (,).
   * 
   * @example
   * 9658314a-7609-4426-afc4-2c924072****,
   * 9658314a-7609-4426-afc4-2c924072****
   */
  uuidList?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      uuidList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

