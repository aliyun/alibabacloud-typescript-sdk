// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTracesDatasRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter parameter, case-insensitive. Supported parameters: \\"serviceid\\", \\"servicename\\", \\"input\\", \\"output\\", \\"status\\", \\"tracetype\\", and \\"tracename\\".
   * 
   * The otel span attributes corresponding to the parameters:
   * 
   * serviceid: resources.service.id
   * 
   * servicename: resources.service.name
   * 
   * input: attributes.input.value
   * 
   * output: attributes.output.value
   * 
   * status: statusCode
   * 
   * tracetype: the attributes.gen_ai.span.kind of span whose parentSpanId is 0
   * 
   * tracename: the spanName of span whose parentSpanId is 0
   * 
   * Valid values:
   * 
   * *   Status
   * *   SpanName
   * *   Input
   * *   TraceType
   * *   SpanType
   * *   ServiceName
   * *   Output
   * *   TraceName
   * *   ServiceId
   * 
   * @example
   * output
   */
  key?: string;
  /**
   * @remarks
   * The parameter operator. Case-insensitive. Supported operators: \\"=\\", \\"contains\\", and \\"startswith\\".
   * 
   * Valid values:
   * 
   * *   contains
   * *   \\=
   * *   startsWith
   * 
   * @example
   * contains
   */
  operator?: string;
  /**
   * @remarks
   * The value of the filter parameter. For the contains operation, it is case-sensitive. For other operations, it is case-insensitive.
   * 
   * @example
   * cretain filter string
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

