// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTransitMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the temporary download URL, in milliseconds. The value must be an integer greater than or equal to 1000 and is rounded down to the nearest whole second. If `ExpireMs` is not specified, the default validity period is `900000` milliseconds (15 minutes). A download URL is generated only when `Network` is specified.
   * 
   * @example
   * 900000
   */
  expireMs?: number;
  /**
   * @remarks
   * The opaque object path returned by `CreateTransitUploadPolicy`. Specify at least one of this parameter and `TransitId`.
   * 
   * @example
   * skill-bundle/tenant-demo/user-demo/20260904120000_code-review.zip
   */
  filePath?: string;
  /**
   * @remarks
   * The network type for the download URL. Valid values: `public` and `internal`. If this parameter is not specified, no download URL is generated.
   * 
   * @example
   * public
   */
  network?: string;
  /**
   * @remarks
   * The Transit ID. Specify at least one of this parameter and `FilePath`. If both are specified, this parameter takes precedence.
   * 
   * @example
   * transit_0123456789abcdef0123456789abcdef
   */
  transitId?: string;
  static names(): { [key: string]: string } {
    return {
      expireMs: 'ExpireMs',
      filePath: 'FilePath',
      network: 'Network',
      transitId: 'TransitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireMs: 'number',
      filePath: 'string',
      network: 'string',
      transitId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

