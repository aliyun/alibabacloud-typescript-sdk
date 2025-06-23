// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailStatistics extends $dara.Model {
  /**
   * @remarks
   * The statistical method. Valid values:
   * 
   * *   **ip**
   * *   **header**
   * *   **uri**
   * 
   * @example
   * uri
   */
  field?: string;
  /**
   * @remarks
   * The name of the header. This parameter is required only when the Field parameter is set to header.
   * 
   * @example
   * hello
   */
  headerName?: string;
  /**
   * @remarks
   * Indicates whether the system collects statistics after deduplication. Valid values:
   * 
   * *   **count**: The system collects statistics before deduplication.
   * *   **distinct**: The system collects statistics after deduplication.
   * 
   * @example
   * count
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      headerName: 'HeaderName',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      headerName: 'string',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

