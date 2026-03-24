// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUmodelDataRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Umodel data to delete. Omit this parameter to delete all Umodel data.
   * 
   * @example
   * apm
   */
  domain?: string;
  /**
   * @remarks
   * The kind of the Umodel data. If unspecified, data of all kinds is deleted.
   * 
   * @example
   * metric_set
   */
  kind?: string;
  /**
   * @remarks
   * The name of the Umodel data. If unspecified, data with any name is deleted.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      kind: 'kind',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
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

