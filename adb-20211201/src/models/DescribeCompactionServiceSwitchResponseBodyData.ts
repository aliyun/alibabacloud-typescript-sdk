// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCompactionServiceSwitchResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the remote build feature is enabled.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableCompactionService?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableCompactionService: 'EnableCompactionService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCompactionService: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

