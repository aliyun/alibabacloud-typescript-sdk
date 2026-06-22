// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAttackCountRequest extends $dara.Model {
  /**
   * @remarks
   * The source identifier of the request. Set this parameter to sas.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 175.0.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The UUID of the server. Separate multiple UUIDs with commas (,).
   * > Call the [DescribeCloudCenterInstances](https://help.aliyun.com/document_detail/141932.html) operation to obtain this parameter.
   * 
   * @example
   * 1587bedb-fdb4-48c4-9330-************
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      lang: 'string',
      sourceIp: 'string',
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

