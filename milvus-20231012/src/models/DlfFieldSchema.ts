// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DlfFieldSchema extends $dara.Model {
  /**
   * @remarks
   * A comment for the field.
   * 
   * @example
   * Primary key field
   */
  comment?: string;
  /**
   * @remarks
   * The dimension of the vector field. This parameter applies only when `isVectorField` is `true`.
   * 
   * @example
   * 128
   */
  dimension?: number;
  /**
   * @remarks
   * The DLF field type.
   * 
   * @example
   * BIGINT
   */
  dlfFieldType?: string;
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * id
   */
  fieldName?: string;
  /**
   * @remarks
   * Indicates whether the field is a primary key.
   * 
   * @example
   * true
   */
  isPrimaryKey?: boolean;
  /**
   * @remarks
   * Indicates whether the DLF field type can be mapped to a Milvus field type.
   * 
   * @example
   * true
   */
  isSupported?: boolean;
  /**
   * @remarks
   * Indicates whether the field is a vector field.
   * 
   * @example
   * false
   */
  isVectorField?: boolean;
  /**
   * @remarks
   * The corresponding Milvus field type.
   * 
   * @example
   * Int64
   */
  milvusFieldType?: string;
  /**
   * @remarks
   * Indicates whether the field can be null.
   * 
   * @example
   * true
   */
  nullable?: boolean;
  /**
   * @remarks
   * The reason the DLF field type is unsupported. This field is present only when `isSupported` is `false`.
   * 
   * @example
   * Unsupported type
   */
  unsupportedReason?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      dimension: 'dimension',
      dlfFieldType: 'dlfFieldType',
      fieldName: 'fieldName',
      isPrimaryKey: 'isPrimaryKey',
      isSupported: 'isSupported',
      isVectorField: 'isVectorField',
      milvusFieldType: 'milvusFieldType',
      nullable: 'nullable',
      unsupportedReason: 'unsupportedReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      dimension: 'number',
      dlfFieldType: 'string',
      fieldName: 'string',
      isPrimaryKey: 'boolean',
      isSupported: 'boolean',
      isVectorField: 'boolean',
      milvusFieldType: 'string',
      nullable: 'boolean',
      unsupportedReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

