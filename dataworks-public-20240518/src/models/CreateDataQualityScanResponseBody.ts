// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityScanResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returns the ID of the created data source sharing rule, which uniquely identifies the rule.
   * 
   * @example
   * 676303114031776
   */
  id?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

