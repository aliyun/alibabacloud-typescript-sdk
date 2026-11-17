"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMemoryTaskResponseBody = exports.GetMemoryTaskResponseBodyData = exports.GetMemoryTaskResponseBodyDataStrategyConfig = exports.GetMemoryTaskResponseBodyDataMemories = exports.GetMemoryTaskResponseBodyDataInput = exports.GetMemoryTaskResponseBodyDataInputMessages = exports.GetMemoryTaskResponseBodyDataInputEvents = exports.GetMemoryTaskResponseBodyDataInputEventsData = exports.GetMemoryTaskResponseBodyDataInputEventsDataParentScope = exports.GetMemoryTaskResponseBodyDataInputEventsDataContent = exports.GetMemoryTaskResponseBodyDataError = exports.GetMemoryTaskResponseBodyDataChanges = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetMemoryTaskResponseBodyDataChanges extends $dara.Model {
    static names() {
        return {
            memoryId: 'memoryId',
            operation: 'operation',
        };
    }
    static types() {
        return {
            memoryId: 'string',
            operation: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMemoryTaskResponseBodyDataChanges = GetMemoryTaskResponseBodyDataChanges;
class GetMemoryTaskResponseBodyDataError extends $dara.Model {
    static names() {
        return {
            code: 'code',
            message: 'message',
        };
    }
    static types() {
        return {
            code: 'string',
            message: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMemoryTaskResponseBodyDataError = GetMemoryTaskResponseBodyDataError;
class GetMemoryTaskResponseBodyDataInputEventsDataContent extends $dara.Model {
    static names() {
        return {
            arguments: 'arguments',
            callId: 'callId',
            format: 'format',
            name: 'name',
            text: 'text',
            type: 'type',
            value: 'value',
        };
    }
    static types() {
        return {
            arguments: 'any',
            callId: 'string',
            format: 'string',
            name: 'string',
            text: 'string',
            type: 'string',
            value: 'any',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMemoryTaskResponseBodyDataInputEventsDataContent = GetMemoryTaskResponseBodyDataInputEventsDataContent;
class GetMemoryTaskResponseBodyDataInputEventsDataParentScope extends $dara.Model {
    static names() {
        return {
            agentId: 'agentId',
            sessionId: 'sessionId',
            teamId: 'teamId',
            userId: 'userId',
        };
    }
    static types() {
        return {
            agentId: 'string',
            sessionId: 'string',
            teamId: 'string',
            userId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMemoryTaskResponseBodyDataInputEventsDataParentScope = GetMemoryTaskResponseBodyDataInputEventsDataParentScope;
class GetMemoryTaskResponseBodyDataInputEventsData extends $dara.Model {
    static names() {
        return {
            callId: 'callId',
            content: 'content',
            eventIds: 'eventIds',
            parentEventId: 'parentEventId',
            parentScope: 'parentScope',
            role: 'role',
            summary: 'summary',
        };
    }
    static types() {
        return {
            callId: 'string',
            content: { 'type': 'array', 'itemType': GetMemoryTaskResponseBodyDataInputEventsDataContent },
            eventIds: { 'type': 'array', 'itemType': 'string' },
            parentEventId: 'string',
            parentScope: GetMemoryTaskResponseBodyDataInputEventsDataParentScope,
            role: 'string',
            summary: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.content)) {
            $dara.Model.validateArray(this.content);
        }
        if (Array.isArray(this.eventIds)) {
            $dara.Model.validateArray(this.eventIds);
        }
        if (this.parentScope && typeof this.parentScope.validate === 'function') {
            this.parentScope.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMemoryTaskResponseBodyDataInputEventsData = GetMemoryTaskResponseBodyDataInputEventsData;
class GetMemoryTaskResponseBodyDataInputEvents extends $dara.Model {
    static names() {
        return {
            data: 'data',
            eventId: 'eventId',
            timestamp: 'timestamp',
            type: 'type',
        };
    }
    static types() {
        return {
            data: GetMemoryTaskResponseBodyDataInputEventsData,
            eventId: 'string',
            timestamp: 'number',
            type: 'string',
        };
    }
    validate() {
        if (this.data && typeof this.data.validate === 'function') {
            this.data.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMemoryTaskResponseBodyDataInputEvents = GetMemoryTaskResponseBodyDataInputEvents;
class GetMemoryTaskResponseBodyDataInputMessages extends $dara.Model {
    static names() {
        return {
            content: 'content',
            referenceTime: 'referenceTime',
            role: 'role',
        };
    }
    static types() {
        return {
            content: 'string',
            referenceTime: 'string',
            role: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMemoryTaskResponseBodyDataInputMessages = GetMemoryTaskResponseBodyDataInputMessages;
class GetMemoryTaskResponseBodyDataInput extends $dara.Model {
    static names() {
        return {
            events: 'events',
            messages: 'messages',
            metadata: 'metadata',
            referenceTime: 'referenceTime',
            text: 'text',
            type: 'type',
        };
    }
    static types() {
        return {
            events: { 'type': 'array', 'itemType': GetMemoryTaskResponseBodyDataInputEvents },
            messages: { 'type': 'array', 'itemType': GetMemoryTaskResponseBodyDataInputMessages },
            metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            referenceTime: 'string',
            text: 'string',
            type: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.events)) {
            $dara.Model.validateArray(this.events);
        }
        if (Array.isArray(this.messages)) {
            $dara.Model.validateArray(this.messages);
        }
        if (this.metadata) {
            $dara.Model.validateMap(this.metadata);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMemoryTaskResponseBodyDataInput = GetMemoryTaskResponseBodyDataInput;
class GetMemoryTaskResponseBodyDataMemories extends $dara.Model {
    static names() {
        return {
            memoryId: 'memoryId',
        };
    }
    static types() {
        return {
            memoryId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMemoryTaskResponseBodyDataMemories = GetMemoryTaskResponseBodyDataMemories;
class GetMemoryTaskResponseBodyDataStrategyConfig extends $dara.Model {
    static names() {
        return {
            instruction: 'instruction',
            type: 'type',
        };
    }
    static types() {
        return {
            instruction: 'string',
            type: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMemoryTaskResponseBodyDataStrategyConfig = GetMemoryTaskResponseBodyDataStrategyConfig;
class GetMemoryTaskResponseBodyData extends $dara.Model {
    static names() {
        return {
            changes: 'changes',
            createdAt: 'createdAt',
            error: 'error',
            finishedAt: 'finishedAt',
            input: 'input',
            inputMessageCount: 'inputMessageCount',
            inputTokenCount: 'inputTokenCount',
            memories: 'memories',
            startedAt: 'startedAt',
            status: 'status',
            strategyConfig: 'strategyConfig',
            taskId: 'taskId',
            triggerType: 'triggerType',
        };
    }
    static types() {
        return {
            changes: { 'type': 'array', 'itemType': GetMemoryTaskResponseBodyDataChanges },
            createdAt: 'string',
            error: GetMemoryTaskResponseBodyDataError,
            finishedAt: 'string',
            input: GetMemoryTaskResponseBodyDataInput,
            inputMessageCount: 'number',
            inputTokenCount: 'number',
            memories: { 'type': 'array', 'itemType': GetMemoryTaskResponseBodyDataMemories },
            startedAt: 'string',
            status: 'string',
            strategyConfig: GetMemoryTaskResponseBodyDataStrategyConfig,
            taskId: 'string',
            triggerType: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.changes)) {
            $dara.Model.validateArray(this.changes);
        }
        if (this.error && typeof this.error.validate === 'function') {
            this.error.validate();
        }
        if (this.input && typeof this.input.validate === 'function') {
            this.input.validate();
        }
        if (Array.isArray(this.memories)) {
            $dara.Model.validateArray(this.memories);
        }
        if (this.strategyConfig && typeof this.strategyConfig.validate === 'function') {
            this.strategyConfig.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMemoryTaskResponseBodyData = GetMemoryTaskResponseBodyData;
class GetMemoryTaskResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'code',
            data: 'data',
            httpStatusCode: 'httpStatusCode',
            message: 'message',
            requestId: 'requestId',
            success: 'success',
        };
    }
    static types() {
        return {
            code: 'string',
            data: GetMemoryTaskResponseBodyData,
            httpStatusCode: 'number',
            message: 'string',
            requestId: 'string',
            success: 'boolean',
        };
    }
    validate() {
        if (this.data && typeof this.data.validate === 'function') {
            this.data.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMemoryTaskResponseBody = GetMemoryTaskResponseBody;
//# sourceMappingURL=GetMemoryTaskResponseBody.js.map