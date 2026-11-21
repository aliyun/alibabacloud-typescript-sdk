// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUmodelDataRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the specific Umodel data. If you do not specify this parameter, all Umodel data is included.
   * 
   * @example
   * apm
   */
  domain?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run of the request. Valid values:
   * - true: sends a check request and does not perform actual changes.
   * - false: sends a normal request.
   * Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The kind of the specific Umodel data. If you do not specify this parameter, all kinds are included.
   * 
   * @example
   * metric_set
   */
  kind?: string;
  /**
   * @remarks
   * The name of the specific Umodel data. If you do not specify this parameter, all Umodel data is included.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      dryRun: 'dryRun',
      kind: 'kind',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      dryRun: 'boolean',
      kind: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

