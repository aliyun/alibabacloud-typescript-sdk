// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluationConfigQuery extends $dara.Model {
  jsonPathInSpan?: string;
  jsonPathInSpanValue?: string;
  spanName?: string;
  static names(): { [key: string]: string } {
    return {
      jsonPathInSpan: 'JsonPathInSpan',
      jsonPathInSpanValue: 'JsonPathInSpanValue',
      spanName: 'SpanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonPathInSpan: 'string',
      jsonPathInSpanValue: 'string',
      spanName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

