// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnalyzeSQLLineageResponseBodyLineageResultLineagesProcessDetail extends $dara.Model {
  /**
   * @remarks
   * The calculating method. Valid values:
   * 
   * *   **DIRECT**: No function or expression is used.
   * *   **EXPR**: A function or expression is used.
   * 
   * @example
   * DIRECT
   */
  calWay?: string;
  /**
   * @remarks
   * The SQL code snippet for field processing.
   * 
   * @example
   * dmstest.b.id
   */
  code?: string;
  static names(): { [key: string]: string } {
    return {
      calWay: 'CalWay',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calWay: 'string',
      code: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

