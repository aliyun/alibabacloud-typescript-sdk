// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetadataSchemaField extends $dara.Model {
  /**
   * @remarks
   * The name of the metadata field.
   * 
   * @example
   * department
   */
  name?: string;
  /**
   * @remarks
   * Valid values: STRING, LONG, DOUBLE, BOOLEAN, and DATETIME. This field is ignored when ValueMode is set to SYSTEM_VARIABLE. The system enforces the inherent type of the bound variable: DOCUMENT_NAME, FILE_TYPE, SOURCE_TYPE, and SOURCE_URI use STRING. FILE_SIZE, DOCUMENT_UPLOAD_TIME, and SOURCE_MODIFIED_TIME use LONG. An incorrect value specified by the user has no effect.
   * 
   * @example
   * STRING
   */
  type?: string;
  /**
   * @remarks
   * When ValueMode is set to CONSTANT, this field specifies a fixed value. An empty value indicates that the value can be assigned during document upload. When ValueMode is set to SYSTEM_VARIABLE, this field specifies a system variable name. Valid system variable names: DOCUMENT_NAME, FILE_TYPE, FILE_SIZE, DOCUMENT_UPLOAD_TIME, SOURCE_TYPE, SOURCE_URI, and SOURCE_MODIFIED_TIME. The system maintains the values of system variables. For manual uploads, the source is fixed to UPLOAD, and SOURCE_URI and SOURCE_MODIFIED_TIME use the values declared by the user. For event stream imports, the system automatically maintains the values. For example, for an OSS import, the source is OSS, SOURCE_URI is oss://bucket/key, and SOURCE_MODIFIED_TIME is the object modification time.
   * 
   * @example
   * EventHouse
   */
  value?: string;
  /**
   * @remarks
   * This field is optional. If omitted, the user assigns the value during document upload. Valid values:
   * - CONSTANT: The field uses a constant. If Value is not empty, the fixed value is automatically applied to the document. If Value is empty, the value can be assigned during upload.
   * - SYSTEM_VARIABLE: The field is bound to a system variable. Value specifies the variable name, and the system automatically populates the value from the document facts.
   * 
   * A value explicitly provided by the user during document upload always takes precedence. The backend does not override user-specified values.
   * 
   * @example
   * CONSTANT
   */
  valueMode?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
      valueMode: 'ValueMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      value: 'string',
      valueMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

