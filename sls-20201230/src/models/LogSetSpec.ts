// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FieldSpec } from "./FieldSpec";


export class LogSetSpec extends $dara.Model {
  /**
   * @remarks
   * The default sort direction. Valid values:
   * - asc: ascending order.
   * - desc: descending order.
   * 
   * Default value: asc.
   * 
   * @example
   * asc
   */
  defaultOrder?: string;
  /**
   * @remarks
   * The list of fields.
   */
  fields?: FieldSpec[];
  /**
   * @remarks
   * The list of hidden fields. These fields are not displayed in the interface by default.
   */
  hiddenFields?: string[];
  /**
   * @remarks
   * The list of Displayed Fields, in sorting order by display priority.
   */
  nameFields?: string[];
  /**
   * @remarks
   * The list of sort fields, used for default sorting.
   */
  orderedFields?: string[];
  /**
   * @remarks
   * The list of tag fields. Tag fields are aggregated together for display and analysis by default.
   */
  tagFields?: string[];
  /**
   * @remarks
   * The name of the time field. The field must be of the timestamp type and supports seconds, milliseconds, microseconds, and nanoseconds.
   * 
   * @example
   * time
   */
  timeField?: string;
  static names(): { [key: string]: string } {
    return {
      defaultOrder: 'default_order',
      fields: 'fields',
      hiddenFields: 'hidden_fields',
      nameFields: 'name_fields',
      orderedFields: 'ordered_fields',
      tagFields: 'tag_fields',
      timeField: 'time_field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultOrder: 'string',
      fields: { 'type': 'array', 'itemType': FieldSpec },
      hiddenFields: { 'type': 'array', 'itemType': 'string' },
      nameFields: { 'type': 'array', 'itemType': 'string' },
      orderedFields: { 'type': 'array', 'itemType': 'string' },
      tagFields: { 'type': 'array', 'itemType': 'string' },
      timeField: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.hiddenFields)) {
      $dara.Model.validateArray(this.hiddenFields);
    }
    if(Array.isArray(this.nameFields)) {
      $dara.Model.validateArray(this.nameFields);
    }
    if(Array.isArray(this.orderedFields)) {
      $dara.Model.validateArray(this.orderedFields);
    }
    if(Array.isArray(this.tagFields)) {
      $dara.Model.validateArray(this.tagFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

