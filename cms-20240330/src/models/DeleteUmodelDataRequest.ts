// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUmodelDataRequest extends $dara.Model {
  /**
   * @remarks
   * Can specify the name of a specific Umodel data, leaving it blank means all
   * 
   * @example
   * apm
   */
  domain?: string;
  /**
   * @remarks
   * Can specify the kind of a specific Umodel data, leaving it blank means all
   * 
   * @example
   * metric_set
   */
  kind?: string;
  /**
   * @remarks
   * Can specify the name of a specific Umodel data, leaving it blank means all
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

