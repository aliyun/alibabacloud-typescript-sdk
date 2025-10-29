// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLineageRelationshipResponseBody extends $dara.Model {
  /**
   * @remarks
   * The lineage ID.
   * 
   * @example
   * 110xxxx:custom-table.xxxxx:maxcompute-table.project.test_big_lineage_080901:custom-sqlxx.00001
   */
  id?: string;
  /**
   * @remarks
   * The request ID. The unique identifier of a request.
   * 
   * @example
   * C99E2BE6-9DEA-5C2E-8F51-1DDCFEADE490
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

