// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCheckTemplateListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The validation rule type. Valid values:
   * - 0: data volume comparison.
   * - 1: metric comparison.
   * - 2: weak content comparison.
   * - 3: custom comparison.
   * - 4: full-text comparison.
   * - 5: null rate comparison.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * The display name of the check type, used in exported reports.
   * 
   * @example
   * Metric Comparison
   */
  checkTypeExport?: string;
  /**
   * @remarks
   * The name of the check type.
   * 
   * @example
   * 1
   */
  checkTypeName?: number;
  /**
   * @remarks
   * The list of covered data source types. Multiple values are separated by commas.
   * 
   * @example
   * Hive,MaxCompute
   */
  dsTypes?: string;
  /**
   * @remarks
   * The list of covered validation engine types, such as Tez and MapReduce. When returned as a string, multiple values are separated by commas.
   * 
   * @example
   * Tez,MapReduce
   */
  engineTypes?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2026-01-16 10:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * Specifies whether the template is built-in. Valid values:
   * - 0: No. The template is a custom template.
   * - 1: Yes. The template is a built-in template.
   * 
   * @example
   * 0
   */
  isBuiltin?: number;
  /**
   * @remarks
   * Indicates whether the template is referenced by a validation task. Valid values:
   * - true: The template is referenced.
   * - false: The template is not referenced.
   * The delete operation does not verify this reference relationship. Confirm before deleting.
   */
  isUsedByTask?: boolean;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * Description of the data volume validation template
   */
  templateDesc?: string;
  /**
   * @remarks
   * The validation template ID (logical foreign key) that uniquely identifies a validation template.
   * 
   * @example
   * 1001
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the validation template.
   * 
   * @example
   * DataVolumeValidationTemplate
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      checkType: 'checkType',
      checkTypeExport: 'checkTypeExport',
      checkTypeName: 'checkTypeName',
      dsTypes: 'dsTypes',
      engineTypes: 'engineTypes',
      gmtModified: 'gmtModified',
      isBuiltin: 'isBuiltin',
      isUsedByTask: 'isUsedByTask',
      templateDesc: 'templateDesc',
      templateId: 'templateId',
      templateName: 'templateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      checkTypeExport: 'string',
      checkTypeName: 'number',
      dsTypes: 'string',
      engineTypes: 'string',
      gmtModified: 'string',
      isBuiltin: 'number',
      isUsedByTask: 'boolean',
      templateDesc: 'string',
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCheckTemplateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data list returned by the operation. For the structure of each element, see the child field descriptions.
   */
  data?: GetDataCheckTemplateListResponseBodyData[];
  /**
   * @remarks
   * The error code. An empty string is returned if the call is successful.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. An empty string is returned if the call is successful.
   * 
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call failed. Check errCode and errMessage for details.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetDataCheckTemplateListResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

