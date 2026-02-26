// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebofficePermission extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the user has the copy permission. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  copy?: boolean;
  /**
   * @remarks
   * Specifies whether the user has the permission to export the file as a PDF file. Valid values:
   * 
   * *   true: The user has the permission to export the file as a PDF file. If you set this parameter to true, you must set the Print parameter to true.
   * *   false: The user does not have the permission to export the file as a PDF file.
   * 
   * @example
   * false
   */
  export?: boolean;
  /**
   * @remarks
   * Specifies whether the user has the permission to view historical versions. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  history?: boolean;
  /**
   * @remarks
   * Specifies whether the user has the printing permission. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  print?: boolean;
  /**
   * @remarks
   * Specifies whether the user has read-only access to the file. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  readonly?: boolean;
  /**
   * @remarks
   * Specifies whether the user has the permission to rename a file. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  You can query the operation information only based a notification sent to Simple Message Queue (SMQ). A rename event is included in the notification.
   * 
   * @example
   * true
   */
  rename?: boolean;
  static names(): { [key: string]: string } {
    return {
      copy: 'Copy',
      export: 'Export',
      history: 'History',
      print: 'Print',
      readonly: 'Readonly',
      rename: 'Rename',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copy: 'boolean',
      export: 'boolean',
      history: 'boolean',
      print: 'boolean',
      readonly: 'boolean',
      rename: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

