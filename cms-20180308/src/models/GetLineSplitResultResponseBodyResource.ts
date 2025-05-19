// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLineSplitResultResponseBodyResource extends $dara.Model {
  additionalRegex?: string;
  endSplitSymbol?: string;
  regex?: string;
  regexSplitResult?: string[];
  startSplitSymbol?: string;
  startSplitSymbolIndex?: number;
  static names(): { [key: string]: string } {
    return {
      additionalRegex: 'AdditionalRegex',
      endSplitSymbol: 'EndSplitSymbol',
      regex: 'Regex',
      regexSplitResult: 'RegexSplitResult',
      startSplitSymbol: 'StartSplitSymbol',
      startSplitSymbolIndex: 'StartSplitSymbolIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalRegex: 'string',
      endSplitSymbol: 'string',
      regex: 'string',
      regexSplitResult: { 'type': 'array', 'itemType': 'string' },
      startSplitSymbol: 'string',
      startSplitSymbolIndex: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.regexSplitResult)) {
      $dara.Model.validateArray(this.regexSplitResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

