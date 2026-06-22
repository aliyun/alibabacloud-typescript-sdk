// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExposedCheckWarningRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The type to which the baseline belongs.
   * > The **TypeName** field returned by calling the [DescribeRiskType](~~DescribeRiskType~~) operation.
   * 
   * @example
   * weak_password
   */
  typeName?: string;
  /**
   * @remarks
   * The UUID of the server to query. Separate multiple UUIDs with commas (,).
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain the UUID of a server.
   * 
   * @example
   * 6541631a-7d47-41fd-9fef-9518113f****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      typeName: 'TypeName',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      typeName: 'string',
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

