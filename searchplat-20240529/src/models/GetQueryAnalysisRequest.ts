// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryAnalysisRequestFunctions extends $dara.Model {
  name?: string;
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryAnalysisRequestHistory extends $dara.Model {
  content?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryAnalysisRequest extends $dara.Model {
  functions?: GetQueryAnalysisRequestFunctions[];
  history?: GetQueryAnalysisRequestHistory[];
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      functions: 'functions',
      history: 'history',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functions: { 'type': 'array', 'itemType': GetQueryAnalysisRequestFunctions },
      history: { 'type': 'array', 'itemType': GetQueryAnalysisRequestHistory },
      query: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.functions)) {
      $dara.Model.validateArray(this.functions);
    }
    if(Array.isArray(this.history)) {
      $dara.Model.validateArray(this.history);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

