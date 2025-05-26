// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSparkTemplateFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the template file is deleted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  succeeded?: boolean;
  static names(): { [key: string]: string } {
    return {
      succeeded: 'Succeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      succeeded: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

