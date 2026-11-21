// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return per page. Valid values: 0 to 100. Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Pass the nextToken value from the previous response as is. You can leave this parameter empty for the first query. The server returns an encrypted hexadecimal string (internal format: {md5}#{dbId}) with a maximum length of 128 characters.
   * 
   * @example
   * d23d8f3f0f0cd1984566b1986c9343122fa0385a05c09694c17fe87709f3eb56d1a7ead56b4a2536
   */
  nextToken?: string;
  /**
   * @remarks
   * The search condition. The value is a JSON string with a maximum length of 1,024 characters. For heapdump, you can use this parameter to filter by conditions such as IP address. Example for pprof: {"ip":"10.0.0.1","start":1711843200000,"end":1711846800000,"profileType":1}.
   * 
   * @example
   * {"ip":"10.0.0.1"}
   */
  searchCondition?: string;
  /**
   * @remarks
   * The task type. Valid values: heapdump (heap dump); LiveDebug Probe: live_debug_log_probe, live_debug_snapshot_probe, live_debug_metric_probe, live_debug_span_probe, and live_debug_span_tag_probe; LiveDebug Command: live_debug_inspect_object, live_debug_search_type, live_debug_search_method, live_debug_decompile, live_debug_get_thread_info, live_debug_get_runtime_info, live_debug_get_memory_info, live_debug_evaluate_expression, and live_debug_modify_logger_level; LiveDebug code hot replacement: live_debug_code_replace. The list operation also supports pprof.
   * 
   * @example
   * live_debug_log_probe
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      searchCondition: 'searchCondition',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      searchCondition: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

