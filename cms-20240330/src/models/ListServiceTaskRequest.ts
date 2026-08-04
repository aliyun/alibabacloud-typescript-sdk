// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 0 to 100. Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Pass the nextToken value from the previous response as-is. This parameter is not required for the first request. The server returns an encrypted hexadecimal string (internal format: {md5}#{dbId}) with a maximum length of 128 characters.
   * 
   * @example
   * d23d8f3f0f0cd1984566b1986c9343122fa0385a05c09694c17fe87709f3eb56d1a7ead56b4a2536
   */
  nextToken?: string;
  /**
   * @remarks
   * The search condition. A JSON string with a maximum length of 1024 characters. For heapdump, this can be used to filter by IP address or other conditions. Example for pprof: {"ip":"10.0.0.1","start":1711843200000,"end":1711846800000,"profileType":1}.
   * 
   * @example
   * {"ip":"10.0.0.1"}
   */
  searchCondition?: string;
  /**
   * @remarks
   * The task type. Valid values: heapdump (heap dump). LiveDebug Probe: live_debug_log_probe, live_debug_snapshot_probe, live_debug_metric_probe, live_debug_span_probe, live_debug_span_tag_probe. LiveDebug Command: live_debug_inspect_object, live_debug_search_type, live_debug_search_method, live_debug_decompile, live_debug_get_thread_info, live_debug_get_runtime_info, live_debug_get_memory_info, live_debug_evaluate_expression, live_debug_modify_logger_level. LiveDebug hot code replacement: live_debug_code_replace. The list operation additionally supports pprof.
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

