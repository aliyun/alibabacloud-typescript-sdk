// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the target instance. This parameter is optional. If not specified, some tasks can be matched by instance scope (such as instanceIds). This parameter is usually required for heap dump scenarios.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.1
   */
  ip?: string;
  /**
   * @remarks
   * The task configuration. The value is a JSON string with a maximum length of 65,536 characters. This parameter is required for LiveDebug tasks. Use a flat JSON structure and pass a single command or probe object directly. Do not wrap it in a commands or probes array. Probe example (dynamic log): {"probeType":"LOG","language":"java","target":{"typeName":"com.example.UserService","methodName":"getUser","location":"exit","instanceIds":["*"]},"action":{"type":"LOG","template":"userId=${args[0]}","templateSegments":[{"type":"TEXT","value":"userId="},{"type":"EXPRESSION","value":"args[0]"}]},"ttl":"1h","captureCount":100}. Command example (OGNL): {"commandType":"EVALUATE_EXPRESSION","language":"java","params":{"expression":"@java.lang.System@getProperty(\\"java.home\\")"},"instanceIds":["*"]}. Note: The top level of a Command type must contain instanceIds. For a Probe, place instanceIds inside target. For a METRIC probe, the valid values for action.metricType are COUNTER, GAUGE, HISTOGRAM, and SUMMARY. The Java agent supports only COUNTER and GAUGE.
   * 
   * @example
   * {"probeType":"LOG","language":"java","target":{"typeName":"com.example.service.UserServiceImpl","methodName":"findById","location":"exit","instanceIds":["*"]},"action":{"type":"LOG","template":"userId=${args[0]} cost=${durationMs}ms","templateSegments":[{"type":"TEXT","value":"userId="},{"type":"EXPRESSION","value":"args[0]"},{"type":"TEXT","value":" cost="},{"type":"EXPRESSION","value":"durationMs"},{"type":"TEXT","value":"ms"}]},"ttl":"1h","captureCount":100}
   */
  taskConfig?: string;
  /**
   * @remarks
   * The task type. This parameter is required. Valid values: heapdump (heap dump); LiveDebug Probe: live_debug_log_probe, live_debug_snapshot_probe, live_debug_metric_probe, live_debug_span_probe, and live_debug_span_tag_probe; LiveDebug Command: live_debug_inspect_object, live_debug_search_type, live_debug_search_method, live_debug_decompile, live_debug_get_thread_info, live_debug_get_runtime_info, live_debug_get_memory_info, live_debug_evaluate_expression, and live_debug_modify_logger_level; LiveDebug hot code replacement: live_debug_code_replace.
   * 
   * @example
   * live_debug_log_probe
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'ip',
      taskConfig: 'taskConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      taskConfig: 'string',
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

