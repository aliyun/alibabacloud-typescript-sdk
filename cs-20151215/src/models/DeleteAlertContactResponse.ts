// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertContactResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The deletion status.
   * 
   * *   true: The alert contact was deleted.
   * *   false: The alert contact failed to be deleted.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * Delete contact resource failed.
   */
  msg?: string;
  /**
   * @remarks
   * An alert contact ID.
   * 
   * @example
   * 12345
   */
  contactId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      msg: 'msg',
      contactId: 'contact_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      msg: 'string',
      contactId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactResponseBody extends $dara.Model {
  result?: DeleteAlertContactResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': DeleteAlertContactResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAlertContactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAlertContactResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

