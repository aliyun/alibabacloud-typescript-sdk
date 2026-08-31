// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportKgSchemaResponseBodyImportResult extends $dara.Model {
  /**
   * @remarks
   * The number of entity types that were changed.
   * 
   * @example
   * 1032591
   */
  entityTypeCount?: number;
  /**
   * @remarks
   * The number of relation types that were changed.
   * 
   * @example
   * 3380766
   */
  relationTypeCount?: number;
  static names(): { [key: string]: string } {
    return {
      entityTypeCount: 'EntityTypeCount',
      relationTypeCount: 'RelationTypeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityTypeCount: 'number',
      relationTypeCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKgSchemaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The import result.
   */
  importResult?: ImportKgSchemaResponseBodyImportResult;
  /**
   * @remarks
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      importResult: 'ImportResult',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      importResult: ImportKgSchemaResponseBodyImportResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.importResult && typeof (this.importResult as any).validate === 'function') {
      (this.importResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

