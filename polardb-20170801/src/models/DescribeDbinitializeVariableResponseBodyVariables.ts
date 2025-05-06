// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInitializeVariableResponseBodyVariablesVariable } from "./DescribeDbinitializeVariableResponseBodyVariablesVariable";


export class DescribeDBInitializeVariableResponseBodyVariables extends $dara.Model {
  variable?: DescribeDBInitializeVariableResponseBodyVariablesVariable[];
  static names(): { [key: string]: string } {
    return {
      variable: 'Variable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variable: { 'type': 'array', 'itemType': DescribeDBInitializeVariableResponseBodyVariablesVariable },
    };
  }

  validate() {
    if(Array.isArray(this.variable)) {
      $dara.Model.validateArray(this.variable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

