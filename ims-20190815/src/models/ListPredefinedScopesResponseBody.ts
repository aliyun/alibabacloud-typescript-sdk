// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPredefinedScopesResponseBodyPredefinedScopesPredefinedScope extends $dara.Model {
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class ListPredefinedScopesResponseBodyPredefinedScopes extends $dara.Model {
  predefinedScope?: ListPredefinedScopesResponseBodyPredefinedScopesPredefinedScope[];
  static names(): { [key: string]: string } {
    return {
      predefinedScope: 'PredefinedScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScope: { 'type': 'array', 'itemType': ListPredefinedScopesResponseBodyPredefinedScopesPredefinedScope },
    };
  }

  validate() {
    if(Array.isArray(this.predefinedScope)) {
      $dara.Model.validateArray(this.predefinedScope);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPredefinedScopesResponseBody extends $dara.Model {
  predefinedScopes?: ListPredefinedScopesResponseBodyPredefinedScopes;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 955C096D-EC99-480B-AF37-3921109107D0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      predefinedScopes: 'PredefinedScopes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScopes: ListPredefinedScopesResponseBodyPredefinedScopes,
      requestId: 'string',
    };
  }

  validate() {
    if(this.predefinedScopes && typeof (this.predefinedScopes as any).validate === 'function') {
      (this.predefinedScopes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

